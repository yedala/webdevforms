import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Credentials } from 'src/app/interfaces/credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login: any = {
    email: '',
    password: '',
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { };
  loginCheck() {
    let cred: Credentials = {
      userName: this.login.email,
      password: this.login.password,
      expires_in: 30,
      last_loginTime: Date.now(),
    }
    const login$ = this.authenticationService.login(cred);
    login$.pipe().subscribe((res: any) => {
      this.router.navigateByUrl('auth/home');
    })
  }
  signUp() {
    this.router.navigateByUrl('/auth/signup');
  }



}
