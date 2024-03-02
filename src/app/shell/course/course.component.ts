import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  id:any;
  constructor(private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.id= +params['id'];
    })
  }
}
