import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../models/card';
import { Deck } from '../../models/deck';
import { LetItRide } from '../../models/let-it-ride';
import { HistoryProvider} from '../../providers/history/history';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {
  betBasic: number;
  betThreeCard: number;
  isPlaying: boolean;
  cardsInPlay: number;
  deck: Deck;
  playerCards: Array<Card>;
  dealerCards: Array<Card>;
  playerBets: Array<number>;
  playerWins: Array<number>;
  result: string;
  rules: LetItRide;

  constructor(public navCtrl: NavController, public historyService: HistoryProvider) {
    this.betBasic = 5;
    this.betThreeCard = 5;
    this.isPlaying = false;
    this.cardsInPlay = 0;

    // TODO initialization headaches
    this.playerBets = [];
    this.playerWins = [];
    this.playerBets[0] = 0;
    this.playerBets[1] = 0;
    this.playerBets[2] = 0;
    this.playerBets[3] = 0;

    this.playerWins[0] = 0;
    this.playerWins[1] = 0;
    this.playerWins[2] = 0;
    this.playerWins[3] = 0;

    this.rules = new LetItRide();
  }

  startPlay() {
    this.isPlaying = true;
    this.playerCards = [];
    this.dealerCards = [];
    this.playerBets = [];
    this.playerWins = [];

    this.deck = new Deck();
    this.deck.shuffle();

    // lock in bets
    this.playerBets[0] = this.betBasic;
    this.playerBets[1] = this.betBasic;
    this.playerBets[2] = this.betBasic;
    this.playerBets[3] = this.betThreeCard;

    this.playerWins[0] = 0;
    this.playerWins[1] = 0;
    this.playerWins[2] = 0;
    this.playerWins[3] = 0;

    // dealer cards first
    this.dealerCards.push(this.deck.dealOne());
    this.dealerCards.push(this.deck.dealOne());

    // player cards
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
      this.playerBets[2] = 0;
    } else if (this.cardsInPlay == 4) {
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
      let allCards: Array<Card> = [];
      allCards.push(this.playerCards[0]);
      allCards.push(this.playerCards[1]);
      allCards.push(this.playerCards[2]);
      allCards.push(this.dealerCards[0]);
      allCards.push(this.dealerCards[1]);
      this.result = this.rules.checkLetItRide(allCards);
      this.isPlaying = false;
    }
  }
}
