import { Card } from './card';

export class Deck {
  cards: Array<Card>;

  constructor() {
    this.cards = [];
    let suits = ['Heart', 'Diamond', 'Club', 'Spade'];
    for (let s = 0; s < suits.length; s++) {
      for (let r = 1; r < 14; r++) {
        let c = new Card(r, suits[s]);
        c.shown = false;
        this.cards.push(c);
      }
    }
  }

  shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex = 0;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  dealOne() {
    return this.cards.pop();
  }
}
