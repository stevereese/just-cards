import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlayPage } from '../pages/play/play';
import { ListPage } from '../pages/list/list';
import { PayTablePage } from '../pages/pay-table/pay-table';
import { CardComponent } from '../components/card/card';
import { ChipComponent } from '../components/chip/chip';
import { LetItRideChipAreaComponent } from '../components/let-it-ride-chip-area/let-it-ride-chip-area';
import { PipesModule } from '../pipes/pipes.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayPage,
    ListPage,
    PayTablePage,
    CardComponent,
    ChipComponent,
    LetItRideChipAreaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FontAwesomeModule,
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayPage,
    ListPage,
    PayTablePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
