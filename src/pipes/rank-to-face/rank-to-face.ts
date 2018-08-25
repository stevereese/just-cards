import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the RankToFacePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'RankToFace',
})
export class RankToFacePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    switch(value) {
      case 1: {
        return "A";
      } case 11: {
        return "J";
      } case 12: {
        return "Q";
      } case 13: {
        return "K";
      } default: {
        return value;
      }
    }
  }

}
