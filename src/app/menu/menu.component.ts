import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { getAuth } from '@firebase/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private auth = getAuth();

  constructor( private locationStrategy : LocationStrategy)
    {}

  ngOnInit(): void
    {history.pushState(null, "", location.href);
    this.locationStrategy.onPopState(() => {
    history.pushState(null, "", location.href);}); }

  public logout()
    {this.auth.signOut();}
}
