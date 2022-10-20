import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  login(body: Login):Observable<Login> {
    return this.httpClient.post<Login>(`http://localhost:3050/auth`, body);
  }

}
