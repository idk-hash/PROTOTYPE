import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGMAHesF7dttH24uJArHqznGD_ayD-DgY",
  authDomain: "deep-dive-79893.firebaseapp.com",
  databaseURL: "https://deep-dive-79893-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "deep-dive-79893",
  storageBucket: "deep-dive-79893.appspot.com",
  messagingSenderId: "360500487861",
  appId: "1:360500487861:web:4a24752a1a897be347c0fc",
  measurementId: "G-R7SNQZ2ZF8"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROTOTYPE';

  constructor(private router: Router)
    {this.router.navigate(['menu']);}
}
