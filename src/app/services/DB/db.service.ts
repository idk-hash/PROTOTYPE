import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { addDoc, getFirestore, collection, Timestamp } from "firebase/firestore";

import { CookieService } from 'ngx-cookie-service';

  //   {if(this.cookieService.check("connCHECK"))
  //     {const unsub = onSnapshot(doc(this.db, "users", this.cookieService.get("connCHECK") ),
  //       (data) =>
  //         { console.log("Current data: ", data.data()); });
  //     this.router.navigate(['menu']);}
  //   else
  //     {this.cookieService.set("connCHECK", "N6jiinBATF9dmtNcACuC", 1);
  //     this.router.navigate(['home']);}}

@Injectable({
  providedIn: 'root'
})
export class DBService {
  private db = getFirestore();
  private cookieService : CookieService | undefined;

  async add(data : {[key : string] : AbstractControl})
    {try {
      const docRef = await addDoc(collection(this.db, "userTemp"),
        {firstName: data.firstName.value,
        lastName:   data.lastName.value,
        ntuNumber:  data.uni.value,
        birthDate:  Timestamp.fromDate(new Date(+data.year.value, +data.month.value, +data.day.value)),
        ntuEmail :  data.ntuEmail.value });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    // this.cookieService?.check
  }
}
