import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';





@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public cards: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public afDatabase: AngularFireDatabase, public navParams: NavParams) {
    this.cards
  }
  pickCategory(date: string){
  this.cards = this.afDatabase.list('Cards', {
    query: {
      orderByChild: 'date',
      equalTo: date
    }
  });
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

}
