import {MuslimQ} from '../../providers/muslim-q';
import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import  moment from "moment";
import momenth from "moment-hijri";
import { Geolocation } from 'ionic-native';
// import { Slides } from 'ionic-angular';
import { CoranPage } from '../coran/coran'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  //TODO : implements the carousel in scss using the currentUserData
  currentUserData = false;
  prayerTimesForToday= false ;
  longitude: any ; 
  latitude:any;
  todayDate :any ;
  hijriDate :any;
  mySlideOptions = {
    autoplay:10000
  };
  constructor(public navCtrl: NavController, private muslim:MuslimQ ){
    this.todayDate = moment().format("dddd, MMMM Do YYYY");
    this.hijriDate = momenth().format('الموافق  iYYYY/iM/iD هـ');
  
  }
  openCoranPage(){
    console.log("coran page been loaded")
    this.navCtrl.push(CoranPage)
  }

  ngOnInit(){
      Geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.longitude,resp.coords.latitude); 
        this.muslim.getPrayersTimeBasedOnMyCurrentLocation(resp.coords.latitude, resp.coords.longitude)
              .then((data) => {
                // console.log(data)
                this.currentUserData = data
                // console.log(data)
                this.prayerTimesForToday = data.items[0]
              })
    }).catch((error) => {
        console.log("error",error)
    })


  }
  




  
}
