export class Card {
  suit: string;
  rank: number;
  shown: boolean;
  backPattern: string;
  suitIcon: string;

  constructor(r: number, s: string) {
    this.rank = r;
    this.suit = s;
  }

  flip() {
    this.shown = !this.shown;
  }
}
