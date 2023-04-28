import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    this.loginStatus.next(this.tokenExist())
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
    this.loginStatus.next(true);
  }

  getToken(): string {
    return localStorage.getItem('token') || '';
  }

  clearToken(){
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }

  tokenExist():boolean{
    return this.getToken()?true:false;
  }
}