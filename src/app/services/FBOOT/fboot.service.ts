import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , EmailAuthProvider} from "firebase/auth";
import { doc, getFirestore, collection, onSnapshot } from "firebase/firestore";

const nav = ['menu', 'home']

@Injectable({
  providedIn: 'root'
})

export class FBOOT {

  private auth = getAuth();

  constructor(private router: Router)
    {

    //this.auth.signOut();

    this.auth.onAuthStateChanged(
      (user) =>
        {if (user)
          {
            // TODO : implement LOBBY for Accounts to be ACTIVATED

            this.router.navigate(['menu']);
          }
        else
          { this.router.navigate(['home/sign_up']); }
        }
      );
    }


  //   this.get_authToken();}

  // private get_authToken()
  //   {if(this.cookieService.check("connCHECK"))
  //     {const unsub = onSnapshot(doc(this.db, "users", this.cookieService.get("connCHECK") ),
  //       (data) =>
  //         { console.log("Current data: ", data.data()); });
  //     this.router.navigate(['menu']);}
  //   else
  //     {this.cookieService.set("connCHECK", "N6jiinBATF9dmtNcACuC", 1);
  //     this.router.navigate(['home']);}}
}

