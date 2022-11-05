import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  homedetails=false;


  constructor() { }

  ngOnInit(): void {
    this.homedetails=true;
    console.log('dashboard component')
    
  }

}
