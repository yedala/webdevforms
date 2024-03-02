import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from 'src/app/services/user-facade.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent {
  myCourses: any;
  constructor(
    private userFacade: userService,
    public router: Router,
    public route: ActivatedRoute,
    ){
    this.getCourses();
  }
  getCourses(){
    this.userFacade.getCourses().subscribe((res: any)=>{
      this.myCourses = res;
    })
  }
  update(id: number){
    this.router.navigate(['course',id],{relativeTo: this.route});
  }


}
