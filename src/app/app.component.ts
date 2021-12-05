import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FBOOT } from './services/FBOOT/fboot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROTOTYPE';

  constructor (private fboot : FBOOT)
  {}

}
