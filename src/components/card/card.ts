import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
/**
 * Generated class for the CardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card',
  templateUrl: 'card.html'
})
export class CardComponent {

  @Input() card: Card;
  text: string;
  shown: boolean;
  rank: number;
  suit: string;

  constructor() {
    console.log('Hello CardComponent Component');
    this.text = 'Hello World';
  }

  rankDisplay() {
    switch(this.rank) {
      case 1: {
        return "A";
      } case 11: {
        return "J";
      } case 12: {
        return "Q";
      } case 13: {
        return "K";
      } default: {
        return this.rank;
      }
    }
  }


}
