import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";



@Injectable({
    providedIn: 'root',
})
export class userService implements OnDestroy {
    sideMenu = new BehaviorSubject(false);
    sideMenu$ = this.sideMenu.asObservable();

    constructor() {
    }

    enableSideMenu(status: boolean) {
        this.sideMenu.next(status);
    }
    getMyProfileDetails() {
        return of({ result: true });
    }
    getCourses() {
        let res: any = [
            {
                title: 'Angular',
                version: '12.2',
                description: 'this is angular',
                img: "data:image/png;base64,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",
                id: 1,

            },
            {
                title: 'JavaScript',
                version: '4.5',
                description: 'this is javaScript',
                img: "data:image/png;base64,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",
                id: 2,

            },
        ];
        return of(res);
    }
    fetchWidgetsList(){
     let widgets: any =[{name: 'notes'},{name:'todolist'},{name: 'wishlist'},{name: 'expenses'}];
        return of(widgets);
    }

    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}