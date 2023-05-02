import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { NewUser } from '../interfaces/new-user';
import { Token } from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  register(nuevoUsuario: NewUser): Observable<Token> {
    console.log("=========================Entro a register en register.service");

    return this.httpClient.post<Token>(environment.apiUrl + '/usuario/register', nuevoUsuario)

  }
}