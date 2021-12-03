import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ScannerComponent } from './scanner/scanner.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { RatingComponent } from './rating/rating.component';
import { RolePowerComponent } from './role-power/role-power.component';
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
    MenuComponent,
    ScannerComponent,
    QrCodeComponent,
    RatingComponent,
    RolePowerComponent
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
