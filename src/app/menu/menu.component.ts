import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { getAuth } from '@firebase/auth';
import { DBService } from '../services/DB/db.service';


// import { DBService } from '../services/DB/db.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private auth = getAuth();
  //private worker = new Worker('../../services/DB/db.worker', { type: 'module' });

  private constraints : MediaStreamConstraints =
  {audio : false ,
  video :
    {width: 640,
    height: 400 }
    // facingMode:  }
  };

  constructor
  (private locationStrategy : LocationStrategy,
  private db : DBService)
    {}

  ngOnInit()
    {this.preventBack();
    // await this.db.sayHello();
    }

  public logout()
    {this.auth.signOut();}

  private preventBack()
    {history.pushState(null, "", location.href);
    this.locationStrategy.onPopState(() => {
    history.pushState(null, "", location.href);});}

  // public test()
  //   { console.log("test function working");
  //     worker.postMessage('hello');
  //   }
}
