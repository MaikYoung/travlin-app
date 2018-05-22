import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


export class SessionService {

    constructor(
        public navCtrl: NavController,
      private afAuth: AngularFireAuth
    ) { }
  
    signInWithFacebook() {
      this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  
    signOut() {
      this.afAuth.auth.signOut();
    }
  
  }