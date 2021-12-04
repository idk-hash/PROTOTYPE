import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROTOTYPE';

  constructor (private router : Router)
  {this.router.navigate(['menu']);}

}
