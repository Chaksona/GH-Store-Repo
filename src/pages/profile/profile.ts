import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

// sub pages
import {EventListPage} from '../event-list/event-list';
import {EventCreatePage} from '../event-create/event-create';

import {AngularFireModule} from 'angularfire2';
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

import { EventProvider } from '../../providers/event/event';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  cards: FirebaseListObservable<any>;
  public eventList: Array<any>;

  constructor(public eventProvider: EventProvider, public navCtrl: NavController, af: AngularFireDatabase, public navParams: NavParams, public alertCtrl: AlertController) {
    // this.cards = af.list('/Cards');
  }
  ionViewDidEnter() {
  this.eventProvider.getUserDetailList().then( eventListSnap => {
    this.eventList = eventListSnap;
  });
}
  gotoadditem():void{
    this.navCtrl.push(EventCreatePage);
  }
  gotoeventlist():void{
    this.navCtrl.push(EventListPage);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
