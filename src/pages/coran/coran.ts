// import {MuslimQ} from '../../providers/muslim-q';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FavoritePage } from './favorite/favorite';
import { QuranPage } from './quran/quran';

@Component({
  selector: 'page-coran',
  templateUrl: 'coran.html'
})
export class CoranPage {

  quranTab :any; 
  favoriteTab: any; 

  constructor(public navCtrl: NavController) {
    this.quranTab = QuranPage; 
    this.favoriteTab = FavoritePage;
  }
  
  ionViewDidLoad() {
    console.log('Hello Coran Page');
  }

}
