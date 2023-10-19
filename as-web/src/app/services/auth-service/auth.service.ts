import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8081/api/auth"];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signup(signuprequest: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + "/register", signuprequest);
  }

  login(loginRequest: any): Observable<any>{
    return this.http.post<[]>(BASIC_URL + "/token", loginRequest);
  }
}
