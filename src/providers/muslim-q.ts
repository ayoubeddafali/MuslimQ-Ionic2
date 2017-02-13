import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise"
import { Injectable } from '@angular/core';
import { MediaPlugin } from 'ionic-native';


@Injectable()
export class MuslimQ {
  private muslimApiKey ="a56e9f8c78e3103f15df26a41d4a4b12";
  public ayahs = []
  public ayahsNumbers = []
  public favorites  = []

  constructor(public http: Http) {
    console.log('Hello MuslimQ Provider');
  }


  
  getPrayersTimeBasedOnMyCurrentLocation(latitude, longitude){
      let baseUrl = `http://muslimsalat.com/${latitude},${longitude}.json?key=${this.muslimApiKey}`
      return this.http.get(baseUrl)
              .map(res => res.json())
              .toPromise()

  }
  getQuranEdition(){
    let baseUrl = `http://api.alquran.cloud/surah`
    return this.http.get(baseUrl)
            .map(res => res.json())
            .toPromise()
  }
  getReaders(){
    let baseUrl = `http://api.alquran.cloud/edition/format/audio`
    return this.http.get(baseUrl)  
            .map(res => res.json())
            .toPromise()
  }


  getFavorites(){
    return this.favorites
  }
  
  existsInFavorites(name:string){
    if(this.favorites.indexOf(name) !=  -1) return true; 

    return false ;

  }


  addToFavorites(surahNumber:number,name:string){
     //TODO complete this shit 
     if( this.existsInFavorites(name) ) return false;
     else {
       this.favorites.push(name);
       
       
     } 
     
  } 
  removeFromFavorites(name){
    let index = this.favorites.indexOf(name)
    this.favorites.splice(index,1)
  }
  getAyahs(surah){
     let baseUrl = `http://api.alquran.cloud/surah/${surah}/quran-simple`
   return this.http.get(baseUrl)
        .map(res => res.json())
        .toPromise()
  }

  playAyahs(ayahs){
    let file = new MediaPlugin(`http://hcmaslov.d-real.sci-nnov.ru/public/mp3/Beatles/01%20Please,%20Please%20Me/The%20Beatles%20-%20Single%20-%20She%20Loves%20You.mp3`);
  //     file.init.then(() => {
  //   console.log('Playback Finished');
    console.log(file.getDuration())
  // }, (err) => {
  //   console.log('somthing went wrong! error code: ' + err.code + ' message: ' + err.message);
  // });
  file.play();
      


  }
  playSurah(reader, surah, ayahs){
   this.getAyahs(surah)
       .then(res => {
         this.ayahs = res.data.ayahs
         for(let i = 0; i< this.ayahs.length ; i++){
           this.ayahsNumbers.push(this.ayahs[i].number)
         }
         this.playAyahs(this.ayahsNumbers)
       })


   
  }




}
