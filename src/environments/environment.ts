

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';


export const environment = {
  production: false,
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
   firebase :{
    apiKey: 'AIzaSyAWMV6er-0qqOoTNRfagQBUzFjHcbpQYZ0',
    authDomain: 'coinnews-fdc6c.firebaseapp.com',
    projectId: 'coinnews-fdc6c',
    storageBucket: 'coinnews-fdc6c.appspot.com',
    messagingSenderId: '411750420372',
    appId: '1:411750420372:web:c2b713135168ab81a6c981',
    measurementId: 'G-9CFR1Z2DV7'
  }
/*// Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);*/
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
