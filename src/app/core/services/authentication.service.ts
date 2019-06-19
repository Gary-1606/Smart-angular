
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { loggedInUser } from "../models/currentUser";
import { apiResponse } from "../models/apiResponse";



@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {
    }

    get IsAuthenticated() {
        return !localStorage.getItem('currentUser');
    }

    register(registerUser: any) {
        return this.http.post<any>('/api/registerUser', registerUser)
            .map((response: apiResponse) => {
                return response;
            });
    }

    forgotPassword(email: string) {
        return this.http.post<any>('/api/registerUser', { email: email })
            .map((response: apiResponse) => {
                return response;
            });
    }

    login(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map((response: apiResponse) => {
                if (response && response.json && response.json.token) {
                    localStorage.setItem('currentUser', JSON.stringify(response.json));
                }
                return response;
            });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }

}