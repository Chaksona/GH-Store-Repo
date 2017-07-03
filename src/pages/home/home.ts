import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage, NavParams } from 'ionic-angular';

import { ItempagePage } from '../itempage/itempage';
import { LoginPage } from "../login/login";

import {AngularFireModule} from 'angularfire2';
import { EventProvider } from '../../providers/event/event';
// for auth    
import {AngularFireAuthModule} from 'angularfire2/auth';
// for database
import {AngularFireDatabaseModule} from 'angularfire2/database';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for database
import { AngularFireDatabase } from 'angularfire2/database';
// for Observables
import {FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';

import {App} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // books: FirebaseListObservable<any>;
  // cards: FirebaseListObservable<any>;
  public eventList: Array<any>;
  constructor(private app:App, public authData: AuthProvider, public navCtrl: NavController, public navParams: NavParams, af: AngularFireDatabase, public eventProvider: EventProvider) {
    // this.books = af.list('/Books');
    // this.cards = af.list('/Cards');

  }
  goToEventDetail(eventId){

  this.navCtrl.push('ItempagePage', { 'eventId': eventId });
}
  LogoutPage(){
    this.authData.logoutUser();
    this.app.getRootNav().setRoot(LoginPage);
  }
  ionViewDidEnter() {
  this.eventProvider.getAllList().then( eventListSnap => {
    this.eventList = eventListSnap;
  });
}

  addItemPage(){
      this.navCtrl.push(ItempagePage);
    }

}
export class ImagePage { }
