import { Component, ViewChild } from '@angular/core';
import {ModalController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SchedulePage} from "../pages/schedule/schedule";
import {BookingPage} from "../pages/booking/booking";
import {CourierPage} from "../pages/courier/courier";
import {NewsPage} from "../pages/news/news";
import {NetworkPage} from "../pages/network/network";
import {HelpPage} from "../pages/help/help";
import {LoginPage} from "../pages/login/login";
import {ContactPage} from "../pages/contact/contact";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public mdlCtrl: ModalController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Schedule', component: SchedulePage},
      { title: 'LCL Booking', component: BookingPage},
      { title: 'Courier', component: CourierPage},
      { title: 'News & Promotion', component: NewsPage},
      { title: 'Agent Network', component: NetworkPage},
      { title: 'Contact Us', component: ContactPage},
      { title: 'Help', component: HelpPage},
      { title: 'Login', component: LoginPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    if(page == LoginPage){
      let modal = this.mdlCtrl.create(LoginPage);
      modal.present();
    }
    else{
      this.nav.setRoot(page.component);
    }
  }
}
