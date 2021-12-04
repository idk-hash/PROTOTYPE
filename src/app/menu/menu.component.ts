import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public haha(event: { currentTarget: any; })
  {
     this.router.navigate([event.currentTarget.textContent]);
    //alert(event.currentTarget.textContent)
  }

}
