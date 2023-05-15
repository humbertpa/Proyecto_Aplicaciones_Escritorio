import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private httpClient: HttpClient) { }

  agregar(nuevoCliente: Cliente): Observable<Cliente> {
    console.log("=========================Entro a agregar en cliente.service");
    console.log(nuevoCliente);

    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post<Cliente>(environment.apiUrl + '/cliente/agregar', nuevoCliente,{headers: httpHeaders});
  }
}
