import { Injectable } from '@angular/core';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  balance: number;
  numHands: number;

  constructor() {
    this.balance = 0;
    this.numHands = 0;
  }

}
