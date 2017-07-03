import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage({
  name: 'event-create'
})
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})




export class EventCreatePage {
  
 
  constructor(public navCtrl: NavController, public navParams: NavParams,  public eventProvider: EventProvider,public cameraPlugin: Camera) {
  
 }
  
  public itempic: string=null;
  createEvent(eventName: string, eventDate: string, eventPrice: number, 
     eventDescription: string ) {
  this.eventProvider.createEvent(eventName, eventDescription, eventDate, eventPrice, this.itempic)
  .then( newEvent => {this.navCtrl.pop();});
}

takePicture(){
  this.cameraPlugin.getPicture({
    quality : 100,
    destinationType : this.cameraPlugin.DestinationType.DATA_URL,
    sourceType : this.cameraPlugin.PictureSourceType.SAVEDPHOTOALBUM ,
    allowEdit : true,
    encodingType: this.cameraPlugin.EncodingType.PNG,
    saveToPhotoAlbum: true
  }).then((imageData) => {
     let base64Image =  imageData;
    this.itempic=base64Image;}
);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCreatePage');
  }
  

}
