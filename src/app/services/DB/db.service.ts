import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Config {
  dbIP : any;
  dbPORT : any;
  php : any;
}

@Injectable({
  providedIn: 'root'
})

export class DB {

  constructor(private http: HttpClient) { }

  async connectToServer()
    {const headers= new HttpHeaders()
      .set('Cache-Control', 'no-cache');
    this.http.get<Config>("http://localhost:4200/values.json")
      .subscribe( data =>
        {console.log(data);
        this.http.post("http://localhost:4200/test/index.php",  { IP : data.dbIP , PORT : data.dbPORT }, {'headers' : headers} )
          .subscribe( resp =>
            {console.log(resp);});
      }
    );
    }
}
