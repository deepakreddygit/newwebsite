import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListviewComponent } from './listview/listview.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReferralDetailsComponent } from './referral-details/referral-details.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import{MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatDividerModule} from '@angular/material/divider';


//import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    HeaderComponent,
    DashboardComponent,
    ReferralDetailsComponent,
    LoginComponent,
    HomeComponent,
  
    

    //ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
