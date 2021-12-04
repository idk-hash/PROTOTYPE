import { Component, OnInit } from '@angular/core';
import { getStorage, ref } from "firebase/storage";

// Import the functions you need from the SDKs you need
import { FirebaseStorage } from '@angular/fire/storage'
import { getApp } from '@angular/fire/app'

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

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})

export class QrCodeComponent implements OnInit {

  constructor() {
    const app = getApp();
    const  storage = getStorage(app);
    const storageRef = ref(storage);
    const imagesRef = ref(storage, 'meh.jpg');

    document.write(imagesRef.toString());
    var img = new Image();
    img.src = "https://firebasestorage.googleapis.com/v0/b/deep-dive-79893.appspot.com/o/meh.jpg?alt=media&token=1f8832b3-f715-4bc9-a13c-038dac1ba4ae";
    document.children[0].children[1].appendChild(img);
  }

  ngOnInit(): void {
  }

}
