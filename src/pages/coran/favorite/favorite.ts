import { MuslimQ } from '../../../providers/muslim-q';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html'
})
export class FavoritePage {
  favorites = []

  constructor(public navCtrl: NavController, private muslim:MuslimQ) {
     this.favorites = this.muslim.getFavorites()
  }

  ionViewDidLoad() {
    console.log('Hello Favorite Page');
  }
   goHome(){
    this.navCtrl.parent.parent.popToRoot()
  }
  delete(name){
      this.muslim.removeFromFavorites(name)
  }

}
