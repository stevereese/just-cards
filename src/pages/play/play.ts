import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../models/card';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {
  betBasic: number;
  betThreeCard: number;
  isPlaying: boolean;
  deck: Array<{suit: string, rank: number}>;
  playerCards: Array<{suit: string, rank: number}>;
  testCard: Card;

  constructor(public navCtrl: NavController) {
    this.betBasic = 5;
    this.betThreeCard = 5;
    this.isPlaying = false;
    this.testCard = new Card();
    this.testCard.suit = "yoooo";
    this.testCard.rank = 155;

    this.buildDeck();
    this.deck = this.shuffleDeck(this.deck);
  }

  buildDeck() {
    this.deck = [];
    let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    for (let s = 0; s < suits.length; s++) {
      for (let r = 1; r < 14; r++) {
        this.deck.push({
          suit: suits[s],
          rank: r
        });
      }
    }
  }

  shuffleDeck(array) {
    let currentIndex = array.length;
    let temporaryValue = 0;
    let randomIndex = 0;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  startPlay() {
    this.isPlaying = true;
    this.betBasic++;
    this.playerCards = [];
    this.deck = this.shuffleDeck(this.deck);

    this.playerCards.push(this.deck[0]);
    this.playerCards.push(this.deck[1]);
    this.playerCards.push(this.deck[2]);
  }
}
