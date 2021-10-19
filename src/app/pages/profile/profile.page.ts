import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { AuthenticateService } from 'src/app/services/authentication.service';
export interface Profile{
  name: string;
  photoUrl: string;
  email: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profile: any;
  profileName: any;
  profileImageUrl: any;
  profileEmail: any;

  constructor(private database: AngularFirestore, private authservice: AuthenticateService) {
    firebase.auth().onAuthStateChanged(user => {
      console.log('AUTH_USER', user);

      if (user) {
        const result = this.database.doc(`/profile/${this.authservice.getUID()}`);
        const userprofile = result.valueChanges();
        userprofile.subscribe((profile: Profile) => {
          console.log('PROFILE::', profile);
          this.profileName = profile.name;
          this.profileImageUrl = profile.photoUrl;
          this.profileEmail = profile.email;
        });
      }
    });
   }

  ngOnInit() {



  }


}
