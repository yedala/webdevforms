import { Component } from '@angular/core';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.scss']
})
export class MyDashboardComponent {
  widgets: any =[{name: 'notes'},{name:'todolist'},{name: 'wishlist'},{name: 'expenses'}];
  selectedWidget: string = 'notes'
  constructor(){
    
  }
}
