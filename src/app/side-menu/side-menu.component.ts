import { Component } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Subject, takeUntil } from 'rxjs';
import { userService } from '../services/user-facade.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
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
  isOpenSideMenu: boolean = false;
  openSideMenu(){
    this.isOpenSideMenu = !this.isOpenSideMenu;
  }
}
