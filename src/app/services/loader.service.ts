import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loading =  new BehaviorSubject(false);
  loading$ = this.loading.asObservable();
  constructor() { }
  showLoader(){
    this.loading.next(true);
  }
  hideLoader(){
    setTimeout(()=>{
    this.loading.next(false);

    },500)
  }
}
