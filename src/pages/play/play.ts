import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';
import { LetItRide } from '../../models/let-it-ride';
import { HistoryProvider } from '../../providers/history/history';
import { PayTableProvider } from '../../providers/pay-table/pay-table';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {
  rules: LetItRide;
  isPlaying: boolean;
  cardsInPlay: number;

  betBasic: number;
  betThreeCard: number;

  deck: Deck;
  playerCards: Array<Card>;
  dealerCards: Array<Card>;
  playerBets: Array<number>;
  playerWins: Array<number>;

  result: string;
  resultThreeCard: string;
  handNet: number;

  constructor(public navCtrl: NavController,
    public historyService: HistoryProvider,
    public payTable: PayTableProvider) {

      this.betBasic = 5;
      this.betThreeCard = 5;
      this.isPlaying = false;
      this.cardsInPlay = 0;

      this.playerBets = [];
      this.playerBets[0] = 0;
      this.playerBets[1] = 0;
      this.playerBets[2] = 0;
      this.playerBets[3] = 0;

      this.playerWins = [];
      this.playerWins[0] = 0;
      this.playerWins[1] = 0;
      this.playerWins[2] = 0;
      this.playerWins[3] = 0;

      this.rules = new LetItRide();
  }

  startPlay() {
    this.result = "";
    this.resultThreeCard = "";

    this.isPlaying = true;
    this.playerCards = [];
    this.dealerCards = [];

    this.deck = new Deck();
    this.deck.shuffle();

    // lock in bets
    this.playerBets[0] = this.betBasic;
    this.playerBets[1] = this.betBasic;
    this.playerBets[2] = this.betBasic;
    this.playerBets[3] = this.betThreeCard;
    this.historyService.balance -= this.betBasic * 3;
    this.historyService.balance -= this.betThreeCard;
    this.historyService.balanceBasic -= this.betBasic * 3;
    this.historyService.balanceThreeCard -= this.betThreeCard;
    this.handNet = this.betBasic * -3 - this.betThreeCard;

    this.playerWins[0] = 0;
    this.playerWins[1] = 0;
    this.playerWins[2] = 0;
    this.playerWins[3] = 0;

    // dealer cards first
    this.dealerCards.push(this.deck.dealOne());
    this.dealerCards.push(this.deck.dealOne());

    // then player cards
    this.playerCards.push(this.deck.dealOne());
    this.playerCards.push(this.deck.dealOne());
    this.playerCards.push(this.deck.dealOne());

    this.historyService.numHands++;

    // TODO wait a tiny bit before flipping
    this.playerCards[0].flip();
    this.playerCards[1].flip();
    this.playerCards[2].flip();

    this.cardsInPlay = 3;
  }

  pullOneBack() {
    if (this.cardsInPlay == 3) {
      this.historyService.balance += this.playerBets[2];
      this.historyService.balanceBasic += this.playerBets[2];
      this.handNet += this.playerBets[2];
      this.playerBets[2] = 0;
    } else if (this.cardsInPlay == 4) {
      this.historyService.balance += this.playerBets[1];
      this.historyService.balanceBasic += this.playerBets[1];
      this.handNet += this.playerBets[1];
      this.playerBets[1] = 0;
    }
    this.advance();
  }

  letItRide() {
    this.advance();
  }

  advance() {
    if (this.cardsInPlay == 3) {
      this.dealerCards[1].flip();
      this.cardsInPlay++;
    } else if (this.cardsInPlay == 4) {
      this.dealerCards[0].flip();
      this.cardsInPlay++;
    }

    if (this.cardsInPlay == 5) {

      // calculate basic game
      let allCards: Array<Card> = [];
      allCards.push(this.playerCards[0]);
      allCards.push(this.playerCards[1]);
      allCards.push(this.playerCards[2]);
      allCards.push(this.dealerCards[0]);
      allCards.push(this.dealerCards[1]);
      this.result = this.rules.checkLetItRide(allCards);
      if (this.result != "") {
        let win = this.payTable.letItRideBasic[this.result];
        this.playerWins[0] = this.playerBets[0] * win;
        this.playerWins[1] = this.playerBets[1] * win;
        this.playerWins[2] = this.playerBets[2] * win;
        let winnings =  this.playerWins[0] +
        this.playerWins[1] +
        this.playerWins[2] +
        this.playerBets[0] +
        this.playerBets[1] +
        this.playerBets[2];
        this.historyService.balance += winnings;
        this.historyService.balanceBasic += winnings;
        this.handNet += winnings;
        this.result += "!";
      } else {
        this.result = "Loss";
      }

      // calculate three card
      if (this.playerBets[3] > 0) {
        let threeCards: Array<Card> = [];
        threeCards.push(this.playerCards[0]);
        threeCards.push(this.playerCards[1]);
        threeCards.push(this.playerCards[2]);
        this.resultThreeCard = this.rules.checkLetItRideThreeCard(threeCards);
        if (this.resultThreeCard != "") {
          let win = this.payTable.letItRideThreeCard[this.resultThreeCard];
          this.playerWins[3] = this.playerBets[3] * win;
          let winnings =  this.playerWins[3] + this.playerBets[3];
          this.historyService.balance += winnings;
          this.historyService.balanceThreeCard += winnings;
          this.handNet += winnings;
          this.resultThreeCard += "!";
        } else {
          this.resultThreeCard = "Lozz";
        }
      }

      this.isPlaying = false;
    }
  }
}
