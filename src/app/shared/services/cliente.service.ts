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

    return this.httpClient.post<Cliente>(environment.apiUrl + '/cliente/agregar', nuevoCliente, { headers: httpHeaders });
  }

  listar() {
    console.log("=========================Entro a listar en cliente.service");
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get(environment.apiUrl + '/cliente/listar', { headers: httpHeaders });
  }

  mostrar(nombre : string) {
    console.log("=========================Entro a mostrar en cliente.service");
    console.log(nombre);
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get(environment.apiUrl + `/cliente/mostrar/${nombre}`, { headers: httpHeaders });
  }

  editar(clienteModificado : Cliente, id : string) {
    console.log("=========================Entro a editar en cliente.service");
    console.log(clienteModificado);
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post(environment.apiUrl + `/cliente/editar/${id}`, clienteModificado,{ headers: httpHeaders });
  }

  cambiarImagen(imagen : string, id : string) {
    console.log("=========================Entro a cambiar Imagen en cliente.service");

    //console.log(imagen);
    //console.log(id);
    const token = localStorage.getItem('token');
    const httpHeaders = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.post(environment.apiUrl + `/cliente/imagen/${id}`, {imagen:imagen} , { headers: httpHeaders });
  }

}
