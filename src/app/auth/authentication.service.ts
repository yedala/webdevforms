import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { CredentialService } from "./credentials.service";
import { Route, Router } from "@angular/router";



@Injectable({
    providedIn: 'root',
})
export class AuthenticationService implements OnDestroy {
    loggedInSubject = new BehaviorSubject(false);
    loggedIn$ = this.loggedInSubject.asObservable();

    constructor(
        private credentialService: CredentialService,
        private router: Router,
    ){
        let credentials = localStorage.getItem('credentials');
        if(credentials)this.loggedInSubject.next(true);
    }
    
    login(context: any): Observable<any>{
        this.credentialService.setCredentials(context);
        this.loggedInSubject.next(true);
        return of(true);
    }
    logout(){
        this.credentialService.setCredentials();
        this.loggedInSubject.next(false);
        this.router.navigateByUrl('/auth/login');
    }
    ngOnDestroy(): void {
        throw new Error("Method not implemented.");
    }
}