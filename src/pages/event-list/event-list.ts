import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import firebase from 'firebase';


@IonicPage({
  name: 'event-list'
})
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  public eventList: Array<any>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventProvider: EventProvider) {
  }
  goToEventDetail(eventId){
  this.navCtrl.push('event-detail', { 'eventId': eventId });
}
  ionViewDidEnter() {
  this.eventProvider.getEventList().then( eventListSnap => {
    this.eventList = eventListSnap;
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  deleteEvent(eventId)
  {
    
    firebase.database()
    .ref(`Cards`)
    .child(eventId)
    .remove();
   this.ionViewDidEnter();
  }

}
