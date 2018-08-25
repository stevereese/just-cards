import { Component, Input } from '@angular/core';
import { Card } from '../../models/card';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFish } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

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

  faCoffee = faCoffee;
  faFish = faFish;
  faBullseye = faBullseye;
  faBomb = faBomb;

  @Input() card: Card;

  constructor() {
  }

  getIcon() {
    switch(this.card.suit) {
      case "Heart": {
        return this.faFish;
      } case "Diamond": {
        return this.faBullseye;
      } case "Spade": {
        return this.faCoffee;
      } case "Club": {
        return this.faBomb;
      } default: {
        return null;
      }
    }
  }

  getSuitColor() {
    switch(this.card.suit) {
      case "Heart": {
        return "red";
      } case "Diamond": {
        return "red";
      } case "Spade": {
        return "black";
      } case "Club": {
        return "black";
      } default: {
        return null;
      }
    }
  }
}
