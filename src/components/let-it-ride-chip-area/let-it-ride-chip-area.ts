import { Component, Input } from '@angular/core';

/**
 * Generated class for the LetItRideChipAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'let-it-ride-chip-area',
  templateUrl: 'let-it-ride-chip-area.html'
})
export class LetItRideChipAreaComponent {

  @Input() bets: Array<number>;
  @Input() wins: Array<number>;

  constructor() {
  }

}
