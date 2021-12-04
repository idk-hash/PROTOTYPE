import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare var cordova : any ;

import { DB } from '../DB/db.service';
import { CONF } from '../CONF/conf.service';

@Injectable({
  providedIn: 'root'
})

export class FBOOT {

  constructor(
      private router: Router,
      private db: DB,
      private cookieService : CookieService)
    {this.db.connectToServer();
    if(this.cookieService.check("UNIFLAG"))
      {this.router.navigate(['abd']);}
    else
      {this.cookieService.set("UNIFLAG", "true", 1);
      this.router.navigate(['fbootapp']);}}

}

