import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})

export class FBOOT {

  private auth = getAuth();

  constructor(private router: Router)
    {this.auth.onAuthStateChanged(
      (user) =>
        {if (user)
          {
            // TODO : implement LOBBY for Accounts to be ACTIVATED

            this.router.navigate(['menu']);
          }
        else
          { this.router.navigate(['home']); }
        }
      );
    }


}

