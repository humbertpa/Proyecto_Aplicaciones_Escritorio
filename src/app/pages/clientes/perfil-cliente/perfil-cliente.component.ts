import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent {

  clienteNombre: string = '';
  clienteId: string = '';
  clienteImage : string = '';

  cliente: Cliente = {
    nombre: '',
    correo: '',
    contacto: '',
    organizacion: '',
    proyecto: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private clienteService: ClienteService,) { }

  ngOnInit(): void {
    this.clienteNombre = this.route.snapshot.params['nombre'];
    console.log('===============\n', this.clienteNombre, '\n===============\n');
    this.clienteService.mostrar(this.clienteNombre).subscribe(
      (response: any) => {
        console.log("De regreso en perfil-cliente.component.ts");
        console.log(response);
        this.clienteId = response[0]._id;
        const datos = response[0];
        this.cliente.nombre = datos.nombre;
        this.cliente.correo = datos.correo;
        this.cliente.contacto = datos.contacto;
        this.cliente.organizacion = datos.organizacion;
        this.cliente.proyecto = datos.proyecto;
        console.log(this.cliente);
        console.log(this.clienteId);
      }, (error) => {
        console.error(error);
      }
    )

  }



  edit: boolean = false;

  btn1: string = "block";
  btn2: string = "none";


  toggleEdit() {
    this.edit = !this.edit;
    this.btn1 = (this.btn1 == "block") ? "none" : "block";
    this.btn2 = (this.btn2 == "block") ? "none" : "block";
    return;
  }

  guardar() {

    const clienteModificado : Cliente = {
      nombre : this.cliente.nombre = (document.getElementById('nombre') as HTMLInputElement).value,
      correo : this.cliente.correo = (document.getElementById('correo') as HTMLInputElement).value,
      contacto : this.cliente.contacto = (document.getElementById('contacto') as HTMLInputElement).value,
      organizacion : this.cliente.organizacion = (document.getElementById('organizacion') as HTMLInputElement).value,
      proyecto: this.cliente.proyecto = (document.getElementById('proyecto') as HTMLInputElement).value,
    }


    this.clienteService.editar(clienteModificado, this.clienteId).subscribe(
      (response: any) => {
        console.log("De regreso desde editar a perfil-cliente.component.ts");
        this.router.navigateByUrl(`/clientes`);
      }, (error) => {
        console.error(error);
      }
    )

    console.log(clienteModificado);
    this.toggleEdit();

  }

  cancelar() {
    this.toggleEdit();
  }

  cambiarImagen(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageData: string = e.target.result;
        // Aquí puedes realizar las operaciones deseadas con la imagen
        // como mostrarla en una vista previa o enviarla al servidor
      };
      reader.readAsDataURL(file);
    }
  }
}
