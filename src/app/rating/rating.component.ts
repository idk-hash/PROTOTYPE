import { Component, OnInit } from '@angular/core';
import { CONF } from '../services/CONF/conf.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor(public conf : CONF)
    {}

  ngOnInit(): void
    {document.getElementById('points')!.innerText = this.conf.points.toString();}

}
