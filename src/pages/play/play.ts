import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-play',
  templateUrl: 'play.html'
})
export class PlayPage {
  betBasic: number;
  betThreeCard: number;

  constructor(public navCtrl: NavController) {
    this.betBasic = 5;
    this.betThreeCard = 5;
  }

  startPlay() {
    this.betBasic++;
  }
}
