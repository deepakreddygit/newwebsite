import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logindetails=true;
  homedetails=false;

  

  constructor(private router: Router) { }
  btnClick=  () => {
    this.router.navigateByUrl('/home');
    this.logindetails=false
}



  ngOnInit(): void {
  }

;
  
}
