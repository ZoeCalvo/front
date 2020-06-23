import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl = 'https://sentinelapplication.herokuapp.com/login';
  constructor( private http: HttpClient) { }

  login(user: Login) {
    return this.http.post<Login>(this.loginUrl, user);
  }
}
