import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Credenciales } from '../interfaces/credenciales';
import { Token } from '../interfaces/token';
import { SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(credenciales: Credenciales): Observable<Token> {
    console.log("Entro al servicio de login ====================================================");
    return this.httpClient.post<Token>(environment.apiUrl + '/usuario/login', credenciales);
  }

  googleLogin(user: SocialUser): Observable<Token>{
    console.log("Entro al servicio de googleLogin ====================================================");

    return this.httpClient.post<Token>(environment.apiUrl + '/usuario/google', {idToken: user.idToken});
  }
}