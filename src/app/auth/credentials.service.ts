import { Injectable } from "@angular/core";
import { Credentials } from "../interfaces/credentials";


@Injectable({
    providedIn: 'root',
})

export class CredentialService{
    private credentials: any = null;
    constructor(){
        // to get credentials if stored 
        const savedCredentials = localStorage.getItem('credentials')
        if(savedCredentials){
            this.credentials = JSON.parse(savedCredentials);
        }
    }
    setCredentials(credentials?: Credentials){
        if(credentials){
            localStorage.setItem('credentials',JSON.stringify(credentials));
        }
        else{
            localStorage.removeItem('credentials');
        }
    }
    isAuthenticated(){
        return !!this.credentials
    }
}