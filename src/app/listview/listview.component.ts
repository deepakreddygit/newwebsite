import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import{BreakpointObserver} from '@angular/cdk/layout'
import { ReferralDetailsComponent } from '../referral-details/referral-details.component';
// import * as _ from 'lodash';
// import { AppEventsService } from '../Services/app-events.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})



export class ListviewComponent {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 dashboard=false;
 referral=false;
 upload=false;
//  homedetails=true;

  constructor(private router: Router, private observer: BreakpointObserver){}
  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
      if(res.matches){
        this.sidenav.mode='over'
        this.sidenav.close()
      } else{
        this.sidenav.mode='side'
        this.sidenav.open();
      }

    })
  }

  dashboardopen() {
    console.log('hai')
    this.router.navigate(['/home/dashboard']);
    this.dashboard=true;
    this.referral=false;
    this.upload=false

  }

  referralopen(){
    this.router.navigate(['/home/referral-details'])
    this.referral=true;
    this.dashboard=false;
    this.upload=false;
  }
  uploaddocs(){
    this.router.navigate(['/home/upload-docs'])
    this.upload=true;
    this.dashboard=false;
    this.referral=false;
  }
  
 
  ngOnInit(): void {

    // this.appEventsService.dataLoading.subscribe((data)=>{
    //   this.isLoading = data.state_id === 0;
     }
    //  navigatetoReference(){
    //   this.router.navigate(['/dashboard']);
    //   this.dashboard=true;
    //   this.homedetails=true;
      
    //  }
     
  }

 
// }


