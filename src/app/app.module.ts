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
import { HomeComponent } from './home/home.component';

import { DB } from './services/DB/db.service';
import { FBOOT } from './services/FBOOT/fboot.service';
import { CONF } from './services/CONF/conf.service';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router } from 'express';

// const routes: Routes = [
//   { path: 'abd', component: AbdComponent},
//   { path: 'home', component: HomeComponent, children:[
//     { path: 'fbootapp', component: FbootappComponent},
//     { path: 'abd', csomponent: AbdComponent}
//   ]},
// ];

const routes: Routes = [
  { path: 'menu', component: MenuComponent},
  { path: 'Scanner', component: ScannerComponent},
  { path: 'QR Code', component: QrCodeComponent},
  { path: 'Rating', component: RatingComponent},
  { path: 'Role Power', component: RolePowerComponent},
  { path: 'home', component: HomeComponent, children:[
    { path: 'sign_in', component: SignInComponent},
    { path: 'sign_up', component: SignUpComponent}]},
  { path: 'sign_in', component: SignInComponent},
  { path: 'sign_up', component: SignUpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ScannerComponent,
    QrCodeComponent,
    RatingComponent,
    RolePowerComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore())
  ],
  exports: [
    RouterModule
  ],
  providers: [
    DB,
    FBOOT,
    CONF,
    CookieService,
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor()
  {}
}
