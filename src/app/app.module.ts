import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http'; 

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

// Importing Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { EventCreatePage } from '../pages/event-create/event-create';
import { EventListPage } from '../pages/event-list/event-list';
import { EventDetailPage } from '../pages/event-detail/event-detail'
import { LoginPage } from "../pages/login/login";
// Importing AF2 Module
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { EventProvider } from '../providers/event/event';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { LoginPageModule } from '../pages/login/login.module'; 

// AF2 Settings
const firebaseConfig ={
  apiKey: "AIzaSyCs10StPKSfD9qXvw2i7zV7gEpKE_Wn7qU",
    authDomain: "test-723fd.firebaseapp.com",
    databaseURL: "https://test-723fd.firebaseio.com",
    projectId: "test-723fd",
    storageBucket: "test-723fd.appspot.com",
    messagingSenderId: "1083308552292"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ProfilePage,
    EventCreatePage,
    EventListPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    LoginPageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ProfilePage,
    EventCreatePage,
    EventListPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SplashScreen,
    StatusBar,
    AuthProvider,
    EventProvider,
    Camera
  ],
  
})
export class AppModule {}
