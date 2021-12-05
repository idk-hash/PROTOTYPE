import { Component } from '@angular/core';
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
