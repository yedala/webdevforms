export interface Credentials {
    userName: string;
    password: string;
    last_loginTime?:number;
    expires_in?:number;
    refresh_token?: string;
}