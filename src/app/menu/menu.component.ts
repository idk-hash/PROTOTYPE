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

  private constraints : MediaStreamConstraints =
  {audio : false ,
  video :
    {width: 640,
    height: 400 }
    // facingMode:  }
  };

  constructor( private locationStrategy : LocationStrategy)
    {}

  ngOnInit(): void
    {this.preventBack();
    this.closeMedia();}

  public logout()
    {this.auth.signOut();}

  private preventBack()
    {history.pushState(null, "", location.href);
    this.locationStrategy.onPopState(() => {
    history.pushState(null, "", location.href);});}

  private closeMedia()
    {navigator.mediaDevices.getUserMedia(this.constraints)
    .then ( med =>
      {med.getTracks()
      .forEach ( track =>
        {track.stop();});});}
}
