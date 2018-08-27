import { Component, Input} from '@angular/core';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons';

/**
 * Generated class for the ChipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chip',
  templateUrl: 'chip.html'
})
export class ChipComponent {

  faLifeRing = faLifeRing;
  @Input() amount: number;
  @Input() type: string;

  constructor() {
  }

}
