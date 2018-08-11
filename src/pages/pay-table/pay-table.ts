import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pay-table',
  templateUrl: 'pay-table.html'
})
export class PayTablePage {
  hands: Array<{title: string, payout: number }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // Winning hands and default payouts
    this.hands = [];
    this.hands.push({title: 'Royal Flush', payout: 250});
    this.hands.push({title: 'Straight Flush', payout: 50});
  }

}
