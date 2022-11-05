import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListviewComponent } from './listview/listview.component';
import { LoginComponent } from './login/login.component';

import { ReferralDetailsComponent } from './referral-details/referral-details.component';

const routes: Routes = [
   //{ path: '', redirectTo: 'login', pathMatch: 'full' },
   {path:'login', component: LoginComponent},
   { path: 'home', component:ListviewComponent, 
   children:[
    {
      path: 'dashboard',
      component: DashboardComponent,
      
    },
    {
      path: 'referral-details',
      component:ReferralDetailsComponent
    }


   ]},
   

   
   

 // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
