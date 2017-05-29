import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SchedulePage} from "../pages/schedule/schedule";
import {NewsPage} from "../pages/news/news";
import {NetworkPage} from "../pages/network/network";
import {HelpPage} from "../pages/help/help";
import {LoginPage} from "../pages/login/login";
import {CourierPage} from "../pages/courier/courier";
import {BookingPage} from "../pages/booking/booking";
import {ContactPage} from "../pages/contact/contact";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SchedulePage,
    BookingPage,
    CourierPage,
    NewsPage,
    NetworkPage,
    ContactPage,
    HelpPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SchedulePage,
    BookingPage,
    CourierPage,
    NewsPage,
    NetworkPage,
    ContactPage,
    HelpPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
