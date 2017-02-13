import {HomePage} from '../home/home';
import {LoadingController, NavController} from 'ionic-angular';
import { Component } from '@angular/core';
/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello Welcome Page');
  }
  goHome(){
    
        let loader = this.loadingCtrl.create({
          content: "Please, you have to be connected to Internet ",
          duration: 500
        });
        loader.present();

        this.navCtrl.setRoot(HomePage);
  }

  }


