import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Subject, takeUntil } from 'rxjs';
import { userService } from '../services/user-facade.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isLoggedIn: boolean = false;
  unsubscribe$ = new Subject();
  openMenu : boolean = false;
  constructor(
    private authenticationService: AuthenticationService,
    public userService: userService,
    ){
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn(){
    this.authenticationService.loggedIn$.pipe(takeUntil(this.unsubscribe$)).subscribe((res: any) =>{
      if(res == true){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }
  logout(){
    this.authenticationService.logout();
  }
  
  openSideMenu(){
    this.openMenu = !this.openMenu;
    this.userService.enableSideMenu(this.openMenu);
  }
}
