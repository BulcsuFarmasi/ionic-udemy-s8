import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { AddPlacePage } from '../pages/add-place/add-place';
import { HomePage } from '../pages/home/home';
import { PlacePage } from '../pages/place/place';
import { SetLocationPage } from '../pages/set-location/set-location';

@NgModule({
  declarations: [
    MyApp,
    AddPlacePage,
    HomePage,
    PlacePage,
    SetLocationPage  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBxVZbw96vHWSk3VYrsusaQJzBaScmIVAY'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPlacePage,
    HomePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
