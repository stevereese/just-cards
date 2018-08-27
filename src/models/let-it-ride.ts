import { Card } from './card';

export class LetItRide {

  constructor() {
  }

  checkLetItRide(cards: Array<Card>) {
    cards = this.sortByRank(cards);
    if (this.isRoyalFlush(cards)) {
      return "Royal Flush";
    } else if (this.isStraightFlush(cards)) {
      return "Straight Flush";
    } else if (this.isFours(cards)) {
      return "Four of a Kind";
    } else if (this.isFullHouse(cards)) {
      return "Full House";
    } else if (this.isFlush(cards)) {
      return "Flush";
    } else if (this.isStraight(cards)) {
      return "Straight";
    } else if (this.isThrees(cards)) {
      return "Three of a Kind";
    } else if (this.isTwoPair(cards)) {
      return "Two Pair";
    } else if (this.isTensOrBetter(cards)) {
      return "Tens or Better";
    } else {
      return "";
    }
  }

  checkLetItRideThreeCard(cards: Array<Card>) {
    cards = this.sortByRank(cards);
    if (this.isRoyalFlush(cards)) {
      return "Mini Royal";
    } else if (this.isStraightFlush(cards)) {
      return "Straight Flush";
    } else if (this.isThrees(cards)) {
      return "Three of a Kind";
    } else if (this.isStraight(cards)) {
      return "Straight";
    } else if (this.isFlush(cards)) {
      return "Flush";
    } else if (this.isPair(cards)) {
      return "Pair";
    } else {
      return "";
    }
  }

  sortByRank(cards: Array<Card>) {
    let i = 0;
    let j = 0;
    let min_j = 0;

    for (i = 0; i < cards.length; i++) {
      min_j = i;
      for (j = i+1; j < cards.length; j++) {
        if (cards[j].rank < cards[min_j].rank) {
          min_j = j;
        }
      }
      let temp: Card = cards[i];
      cards[i] = cards[min_j];
      cards[min_j] = temp;
    }

    return cards;
  }

  isRoyalFlush(cards: Array<Card>) {
    if (cards.length == 3) {
      return this.isStraight(cards) && this.isFlush(cards) && cards[0].rank == 1 && cards[2].rank == 13;
    } else if (cards.length == 5) {
      return this.isStraight(cards) && this.isFlush(cards) && cards[0].rank == 1 && cards[4].rank == 13;
    }
    return false;
  }

  isStraightFlush(cards: Array<Card>) {
    return this.isStraight(cards) && this.isFlush(cards);
  }

  isFours(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank && cards[1].rank == cards[2].rank && cards[2].rank == cards[3].rank;
    let b: boolean = cards[1].rank == cards[2].rank && cards[2].rank == cards[3].rank && cards[3].rank == cards[4].rank;
    return a || b;
  }

  isFullHouse(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank && cards[2].rank == cards[3].rank && cards[3].rank == cards[4].rank;
    let b: boolean = cards[0].rank == cards[1].rank && cards[1].rank == cards[2].rank && cards[3].rank == cards[4].rank;
    return a || b;
  }

  isThrees(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank && cards[1].rank == cards[2].rank;
    if (cards.length == 3) {
      return a;
    }
    let b: boolean = cards[1].rank == cards[2].rank && cards[2].rank == cards[3].rank;
    let c: boolean = cards[2].rank == cards[3].rank && cards[3].rank == cards[4].rank;
    return a || b || c;
  }

  isTwoPair(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank && cards[2].rank == cards[3].rank;
    let b: boolean = cards[0].rank == cards[1].rank && cards[3].rank == cards[4].rank;
    let c: boolean = cards[1].rank == cards[2].rank && cards[3].rank == cards[4].rank;
    return a || b || c;
  }

  isTensOrBetter(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank && (cards[0].rank == 1 || cards[0].rank >= 10);
    let b: boolean = cards[1].rank == cards[2].rank && (cards[1].rank == 1 || cards[1].rank >= 10);
    let c: boolean = cards[2].rank == cards[3].rank && (cards[2].rank == 1 || cards[2].rank >= 10);
    let d: boolean = cards[3].rank == cards[4].rank && (cards[3].rank == 1 || cards[3].rank >= 10);
    return a || b || c || d;
  }

  isPair(cards: Array<Card>) {
    let a: boolean = cards[0].rank == cards[1].rank;
    let b: boolean = cards[1].rank == cards[2].rank;
    return a || b;
  }

  isStraight(cards: Array<Card>) {
    let i = 0;

    // ace logic
    if (cards[0].rank == 1) {
      // five card
      if (cards.length == 5) {
        let low: boolean = cards[1].rank == 2 && cards[2].rank == 3 && cards[3].rank == 4 && cards[4].rank == 5;
        var high: boolean = cards[1].rank == 10 && cards[2].rank == 11 && cards[3].rank == 12 && cards[4].rank == 13;
        return low || high;
      // three card
      } else if (cards.length == 3) {
        let low: boolean = cards[1].rank == 2 && cards[2].rank == 3;
        let high: boolean = cards[1].rank == 12 && cards[2].rank == 13;
        return low || high;
      }
    // remaining logic
    } else {
      let testRank: number = cards[0].rank + 1;
      for (i = 1; i < cards.length; i++) {
        if (cards[i].rank != testRank) {
          return false;
        } else {
          testRank++;
        }
      }
      return true;
    }
  }

  isFlush(cards: Array<Card>) {
    let targetSuit = cards[0].suit;
    let i = 0;
    for (i = 1; i < cards.length; i++) {
      if (cards[i].suit != targetSuit) {
        return false;
      }
    }
    return true;
  }
}
