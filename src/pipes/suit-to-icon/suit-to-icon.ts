import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SuitToIconPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'SuitToIcon',
})
export class SuitToIconPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    switch(value) {
      case "Heart": {
        return "faFish";
      } case "Diamond": {
        return "faBullseye";
      } case "Spade": {
        return "faCoffee";
      } case "Club": {
        return "faBomb";
      } default: {
        return value;
      }
    }
  }
}
