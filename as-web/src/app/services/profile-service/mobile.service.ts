import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage-service/storage.service';
import { Observable } from 'rxjs';

const BASIC_URL = ["http://localhost:8082/api/accountservice/mobile"];

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http: HttpClient) { }

  getAllMobile(): Observable<any>{
    return this.http.get<[]>(BASIC_URL + "/mobiles", {
      headers: this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader(): HttpHeaders{
    let authHeaders: HttpHeaders = new HttpHeaders();

    return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
    );
  }
}
