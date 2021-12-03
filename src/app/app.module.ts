import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
// const routes: Routes = [
//   { path: 'abd', component: AbdComponent},
//   { path: 'home', component: HomeComponent, children:[
//     { path: 'fbootapp', component: FbootappComponent},
//     { path: 'abd', csomponent: AbdComponent}
//   ]},
// ];

const routes: Routes = [
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
