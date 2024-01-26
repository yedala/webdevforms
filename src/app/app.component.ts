import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webdevforms';
  screenHeight: any;
  constructor(private route: Router){
    // this.route.navigateByUrl('/webdev1');
    this.screenHeight = window.innerHeight;
  }
}
