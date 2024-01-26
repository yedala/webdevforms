import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class userService implements OnDestroy {
    sideMenu =  new BehaviorSubject(false);
    sideMenu$ = this.sideMenu.asObservable();

    constructor() {
    }

    enableSideMenu(status: boolean){
        this.sideMenu.next(status);
    }


    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}