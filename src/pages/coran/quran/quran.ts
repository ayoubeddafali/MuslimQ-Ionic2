import {SurahPage} from './surah/surah';
import { MuslimQ } from '../../../providers/muslim-q';
import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-quran',
  templateUrl: 'quran.html'
})
export class QuranPage implements OnInit{
  surahs:any = []
  typo:any = {}
  
  constructor(public navCtrl: NavController,
   private muslim:MuslimQ,
    private loadingCtrl:LoadingController) {}

  
   goHome(){  
    this.navCtrl.parent.parent.popToRoot()
  }
  ionViewDidLoad() {
    console.log('Hello Quran Page');
  }
  openSurah(number,ayahs, name){
    let loader = this.loadingCtrl.create({
      content:"Downloading...",
      duration:2000
    });
    loader.present()                                                                                    
    this.navCtrl.push(SurahPage,{ "number": number, "ayahs": ayahs, "name":name }) 
  }
 
  ngOnInit(){
  
     let loader = this.loadingCtrl.create({
          content: "Fetching Data ",
         
        });
        loader.present().then(()=>{

        
    this.muslim.getQuranEdition()
        .then(response => {
          this.surahs = response.data
          loader.dismiss()
          console.log(this.surahs) 
        })
      });

  }

}
