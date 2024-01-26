import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from "@angular/router";
import { CredentialService } from "./credentials.service";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    constructor(private credentialService: CredentialService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.credentialService.isAuthenticated()){
            return true;
        }
        return false;
    }
    

}