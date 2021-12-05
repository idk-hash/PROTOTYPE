import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getFirestore,collection, addDoc, doc, onSnapshot } from "firebase/firestore";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router : Router)
    {}//this.router.navigate(['home/sign_in']);}

  ngOnInit()
    {}

 }

    //const db = getFirestore();
    // const unsub = onSnapshot(collection(db, "users"), (docs) => {
    //   docs.forEach((doc) => {
    //     console.log("Current data: ", doc.data());
    // });
    // });

    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);}
