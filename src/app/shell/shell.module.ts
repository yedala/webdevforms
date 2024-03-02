import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellRoutingModule } from './shell-routing.module';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseComponent } from './course/course.component';
import { MatCardModule } from '@angular/material/card';
import { NotesComponent } from './notes/notes.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { TodolistComponent } from './todolist/todolist.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  declarations: [
    MyDashboardComponent,
    MyProfileComponent,
    MyCoursesComponent,
    CourseComponent,
    NotesComponent,
    WishlistComponent,
    ExpensesComponent,
    TodolistComponent,
   ],
  imports: [
    CommonModule,
    ShellRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatIconModule
  ]
})
export class ShellModule { }
