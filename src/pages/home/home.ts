import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    this.openWebPage()
  }
  
  openWebPage(){
    const options : InAppBrowserOptions = {
      zoom: 'no',
      hidden: 'yes',
    }
    this.iab.create('https://mts.csx.com.kh', '_blank', options)
  }
}
