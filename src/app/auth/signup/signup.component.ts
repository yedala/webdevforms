import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signUp: any ={
    firstName:'',
    lastname:'',
    mobileNumber:'',
  }

  constructor(private router: Router){}
  login(){
    this.router.navigateByUrl('auth/login')
  }
  signUpNewUser(){
    
  }
}
