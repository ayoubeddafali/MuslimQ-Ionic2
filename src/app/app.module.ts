import {Format} from '../pipes/format';
import {FavoritePage} from '../pages/coran/favorite/favorite';
import {QuranPage} from '../pages/coran/quran/quran';
import {FormsModule} from '@angular/forms';
import {MuslimQ} from '../providers/muslim-q';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome'
import { CoranPage } from '../pages/coran/coran'
import { SurahPage } from "../pages/coran/quran/surah/surah"

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    CoranPage,
    FavoritePage,
    QuranPage,
    SurahPage,
    Format
    
  ],
  imports: [
    IonicModule.forRoot(MyApp), 
    HttpModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    CoranPage,
    FavoritePage,
    QuranPage,
    SurahPage
  ],
  providers: [MuslimQ]
})
export class AppModule {}
