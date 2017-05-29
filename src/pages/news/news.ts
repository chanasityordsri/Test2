import { Component } from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  pet: string = "news";
  isAndroid: boolean = false;
  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
  }

}
