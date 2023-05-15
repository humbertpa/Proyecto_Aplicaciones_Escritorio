import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.scss']
})
export class NuevoClienteComponent {

  nuevoCliente: Cliente = {
    nombre: '',
    correo: '',
    contacto: '',
    organizacion: '',
    proyecto: ''
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router

  ) { }

  agregarCliente(event: Event) {
    event.preventDefault();

    console.log("=========================Entro a agregarCliente en nuevoCliente.component");


    this.nuevoCliente.nombre = (document.getElementById('cliente') as HTMLInputElement).value;
    this.nuevoCliente.correo = (document.getElementById('correo') as HTMLInputElement).value;
    this.nuevoCliente.contacto = (document.getElementById('contacto') as HTMLInputElement).value;
    this.nuevoCliente.organizacion = (document.getElementById('organizacion') as HTMLInputElement).value;
    this.nuevoCliente.proyecto = (document.getElementById('proyecto') as HTMLInputElement).value;

    this.clienteService.agregar(this.nuevoCliente).subscribe(
      (response : Cliente) => {
        console.log('Cliente agregado con éxito:', response);
        this.router.navigate(['/clientes']);
      },
      (error) => {
        console.error('Error al agregar cliente:', error);
        // Aquí podrías manejar el error, como mostrar un mensaje de error en la vista.
      }
    );
  }
}
