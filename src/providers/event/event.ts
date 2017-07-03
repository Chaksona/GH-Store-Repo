import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';

@Injectable()
export class EventProvider {
  public ID=0;
  
  createEvent(eventName: string,  eventDescription: string, eventDate: string, eventPrice: number, 
    imageData:string): firebase.Promise<any> {
  this.ID=this.ID+1;
    return firebase.database()
    .ref(`Cards`)
    .push({
      ID:this.ID-1,
      name: eventName,
      description: eventDescription,
      date: eventDate,
      price: eventPrice * 1,
         imageData:imageData,
      userid:firebase.auth().currentUser.uid
  });
}

getContactInfo(eventId): Promise<any> {
   return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`Cards`)
    .child(eventId).on('value', snapshot => {
      resolve({
        id:snapshot.key,
        lol: snapshot.val().userid,
      });
    });
  });
}

getUserDetailList(): Promise<any> {
  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`userProfile/${firebase.auth().currentUser.uid}/ProfileInfo`)
    .on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().Name,
          email: snap.val().Email,
          number: snap.val().Number,
          address: snap.val().Address,
        });
      return false
      });
      resolve(rawList);
    });
  });
}

lol(owner)
{
   return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`userProfile/${owner}/ProfileInfo`)
    .on('value', snapshot => {
      resolve({
          Name: snapshot.val().Name,
          Email: snapshot.val().Email,
          Number:snapshot.val().Number,
      });
    });
  });

}
  getEventList(): Promise<any> {
  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`Cards`)
    .on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        if(snap.val().userid==firebase.auth().currentUser.uid)
        {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          description: snap.val().description,
          price: snap.val().price,
          date: snap.val().date,
        });}
      return false
      });
      resolve(rawList);
    });
  });
}

 getAllList(): Promise<any> {
  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`Cards`)
    .on('value', snapshot => {
      let rawList = [];
      snapshot.forEach( snap => {
        rawList.push({
          id: snap.key,
          name: snap.val().name,
          description: snap.val().description,
          price: snap.val().price,
          date: snap.val().date,
        });
      return false
      });
      resolve(rawList);
    });
  });
}

  getDetail(eventId): Promise<any> {

  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`Cards`).child(eventId).on('value', snapshot => {
      resolve({
        id: snapshot.key,
        name: snapshot.val().name,
        description: snapshot.val().description,
        date: snapshot.val().date,
        price: snapshot.val().price,
        revenue: snapshot.val().revenue,
        userid:snapshot.val().userid,
      });
    });
  });
}


  getEventDetail(eventId): Promise<any> {
  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`Cards`)
    .child(eventId).on('value', snapshot => {
      resolve({
        id: snapshot.key,
        name: snapshot.val().name,
        description: snapshot.val().description,
        date: snapshot.val().date,
        price: snapshot.val().price,
        revenue: snapshot.val().revenue
      });
    });
  });
}


setProfile(name:string,email:string,number:number,address:string)
{ 


  return new Promise( (resolve, reject) => {
    firebase.database()
    .ref(`userProfile/${firebase.auth().currentUser.uid}/ProfileInfo`)
    .push ({
          Name: name,
          Email: email,
          Address: address,
          Number: number,
        });
      return false
      });
}

  constructor(public http: Http) {
    console.log('Hello EventProvider Provider');
  }

}
