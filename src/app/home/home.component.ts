import { Component } from '@angular/core';
import { userService } from '../services/user-facade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openSideMenu: boolean = false;
  constructor(
    public userService: userService,
  ){
   this.openMenu();
  }

  openMenu(){
    this.userService.sideMenu$.pipe().subscribe((res: any)=>{
      this.openSideMenu = res;
    });
  }

}
