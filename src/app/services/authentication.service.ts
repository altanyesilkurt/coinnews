// authentication.service.ts
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

export interface UserPro {
  username: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private user : UserPro;

  constructor(
    private afAuth: AngularFireAuth
  ) {
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });

  }

  setUser(user: UserPro){
    return this.user = user;
  }

  getUID(): string{
    return this.user.uid;
  }

  loginUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));
    });
  }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if ( this.afAuth.currentUser ) {
        this.afAuth.signOut()
          .then(() => {
            console.log('LOG Out');
          }).catch((error) => {
          reject();
        });
      }
    });
  }

  userDetails() {
    return this.afAuth.user;
  }
}
