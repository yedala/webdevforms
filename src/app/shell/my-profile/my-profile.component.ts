import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { userService } from 'src/app/services/user-facade.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {
  constructor(private userfacade: userService){
    this.getProfileDetails();
  }
  getProfileDetails(){
    this.userfacade.getMyProfileDetails().subscribe((res: any)=>{
      console.log('res');
      
    })
  }

}
