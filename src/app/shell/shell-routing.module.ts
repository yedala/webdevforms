import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AuthenticationGuard } from '../auth/authentication.gaurd';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseComponent } from './course/course.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: MyDashboardComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path:'profile',
    component: MyProfileComponent,
    canActivate:[AuthenticationGuard],
  },
  {
    path:'courses',
    component: MyCoursesComponent,
    children: [
      {
        path:"course/:id",
        component: CourseComponent,
      }
    ],
    canActivate:[AuthenticationGuard],
  },
  {
    path:'testing',
    component: TestingComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
