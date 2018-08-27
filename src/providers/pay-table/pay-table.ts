import { Injectable } from '@angular/core';

/*
  Generated class for the PayTableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PayTableProvider {

  letItRideBasic: any;
  letItRideThreeCard: any;

  constructor() {
    this.letItRideBasic = {};
    this.letItRideBasic["Royal Flush"] = 1000;
    this.letItRideBasic["Straight Flush"] = 200;
    this.letItRideBasic["Four of a Kind"] = 50;
    this.letItRideBasic["Full House"] = 11;
    this.letItRideBasic["Flush"] = 8;
    this.letItRideBasic["Straight"] = 5;
    this.letItRideBasic["Three of a Kind"] = 3;
    this.letItRideBasic["Two Pair"] = 2;
    this.letItRideBasic["Tens or Better"] = 1;

    this.letItRideThreeCard = {};
    this.letItRideThreeCard["Mini Royal"] = 50;
    this.letItRideThreeCard["Straight Flush"] = 40;
    this.letItRideThreeCard["Three of a Kind"] = 30;
    this.letItRideThreeCard["Straight"] = 6;
    this.letItRideThreeCard["Flush"] = 3;
    this.letItRideThreeCard["Pair"] = 1;

  }

}
