import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { getAuth } from '@firebase/auth';
import { DBService } from '../services/DB/db.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog'


// import { DBService } from '../services/DB/db.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private auth = getAuth();
  //private worker = new Worker('../../services/DB/db.worker', { type: 'module' });

  constructor
    ( private locationStrategy : LocationStrategy,
      private dialog : MatDialog )
    { window.addEventListener('resize', this.resize);
      window.addEventListener('load', this.resize);}

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

  public test()
    // { console.log("test function working");
    //   worker.postMessage('hello');
    // }
    {this.dialog.open(DialogDataExampleDialogBBB,
      { position:
        { top: '35vh',
          left: '5vw'},
        width: '90vw',
        // height: '30vh',
        hasBackdrop: false})}

  private resize() {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  template:`<h1 mat-dialog-title>Dialog with elements</h1>
  <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
  <div mat-dialog-actions>
    <button mat-button mat-dialog-close>Close</button>
  </div>`
})
export class DialogDataExampleDialogBBB {}
