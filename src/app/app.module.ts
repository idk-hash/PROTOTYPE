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

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideStorage,getStorage } from '@angular/fire/storage';

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
  { path: 'Role Power', component: RolePowerComponent}
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
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage())
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CookieService,
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor()
  {}
}
