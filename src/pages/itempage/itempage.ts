import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { AlertController} from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-itempage',
  templateUrl: 'itempage.html',
})
export class ItempagePage {

  public currentEvent: any;
  public info:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventProvider: EventProvider,public alertCtrl:AlertController) {
  }
  ionViewDidEnter(){
  this.eventProvider.getDetail(this.navParams.get('eventId'))
  .then( eventSnap => {
    this.currentEvent = eventSnap;
  });
}
  presentAlert()
  {
     this.eventProvider.getContactInfo(this.currentEvent)
  .then( eventSnap => { this.info=eventSnap });

    let alert=this.alertCtrl.create({
      title:"Contact Information",
      message:"Name:"+ this.info.Name,
      buttons :['ok']
    })
    alert.present();
  }

  comonman()
{
  this.eventProvider.lol(document.getElementById("please").textContent)
  .then(eventSnap=>{
    this.info=eventSnap;
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItempagePage');
  }

}
