import {MuslimQ} from '../../../../providers/muslim-q';
import { Component,OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController, ActionSheetController,  AlertController } from 'ionic-angular';


@Component({
  selector: 'page-surah',
  templateUrl: 'surah.html'
})
export class SurahPage implements OnInit{
  surahNumber:any; 
  ayahs:any ; 
  images = []
  name:string 
  readers = []
  show(){
    return this.images.length == this.ayahs
  }
  constructor(public navCtrl: NavController,
   private params:NavParams,
   private muslim:MuslimQ,
   private loadingCtrl:LoadingController,
   public actionSheetCtrl: ActionSheetController,
   public alertCtrl:AlertController 
   ) {
    this.surahNumber = this.params.get("number")
    this.ayahs = this.params.get("ayahs")
    this.name = this.params.get("name")
    let loader = this.loadingCtrl.create({
      content:"Wait...",
    })
    loader.present().then(()=>{
       let i = 1 
    while (i <= this.ayahs){
      let baseUrl = `http://cdn.alquran.cloud/media/image/${this.surahNumber}/${i}`
      this.images.push(baseUrl)
      i = i + 1 
    } 
  loader.dismiss()
    })

  }

  more(){
        let actionSheet = this.actionSheetCtrl.create({
      title: 'Do many things ..',
      buttons: [
        {
          text: 'Play Audio',
          handler: () => {
            console.log('Audio clicked');
                  let alert = this.alertCtrl.create();
                  alert.setTitle('Lightsaber color');
                for (let k = 0 ; k < this.readers.length ; k++){
                   alert.addInput({
                    type: 'radio',
                    label: this.readers[k].name,
                    value: this.readers[k].identifier,
                    checked: false
                  });

                }
              
                  alert.addButton('Cancel');
                  alert.addButton({
                    text: 'OK',
                    handler: data => {
                     this.muslim.playSurah(data, this.surahNumber,this.ayahs)
                      // console.log(data)
                    }
                  });
                  alert.present()
          }
        },{
          text: 'Get Tafseer',
          handler: () => {
            console.log('Tafseer played');
          }
        },
          {
          text: 'Add to Favorites',
          handler: () => {
              if (! this.muslim.addToFavorites(this.surahNumber,this.name)) {
                console.log("This surah already exists!!")
                
              }              
              else {
                console.log("Added succesfuly to the favorites !!") 
              }

          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();

  }

  ionViewDidLoad() {
    console.log('Hello Surah Page');
  }
  ngOnInit(){
    this.muslim.getReaders()
            .then(response => {
                this.readers = response.data 
            })
  }

}
