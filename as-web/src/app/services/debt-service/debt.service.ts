import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage-service/storage.service';

const BASIC_URL = ["http://localhost:8084/api/debt"];

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient) { }

  getAllCriterias(): Observable<any>{
    return this.http.get<[]>(BASIC_URL + "/criterias", {
      headers: this.createAuthorizationHeader()
    })
  }

  getCriteriaById(criteriaId: number): Observable<any>{
    return this.http.get<[]>(BASIC_URL + `/criteria/${criteriaId}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  putCriteria(criteria: any, criteriaId: number): Observable<any>{
    return this.http.put<[]>(BASIC_URL + `/criteria/${criteriaId}`, criteria, {
      headers: this.createAuthorizationHeader()
    })
  }

  createCriteria(criteria:any):Observable<any>{
    return this.http.post<[]>(BASIC_URL + "/criteria", criteria, {
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
