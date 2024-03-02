import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() detectRouting = false;
  loading: boolean = false;
  constructor(public loaderService: LoaderService,
    private router: Router){
    this.loaderService.loading$.subscribe((res: any)=>{
      this.loading = res;
    })
  }
  ngOnInit(): void {
      if(this.detectRouting){
        this.router.events.subscribe((event)=>{
          if(event instanceof NavigationStart){
            this.loaderService.showLoader();
          }
          else if(event instanceof NavigationCancel || event instanceof NavigationEnd || event instanceof NavigationError){
            this.loaderService.hideLoader();
          }
        })
      }
  }

}
