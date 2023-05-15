import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared/interfaces/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.scss']
})
export class TablaClientesComponent implements OnInit{

  clientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router : Router
    
    ){}

  ngOnInit(): void {
    
    this.clienteService.listar().subscribe(
      (response : any)=>{
        console.log("De regreso en tabla-clientes.component.ts");
        this.clientes = response;
        console.log(this.clientes);
      },(error)=>{
        console.error(error);
      }
    )
  }

  mostrarPerfil(cliente: Cliente) {
    //console.log(cliente.nombre);
    this.router.navigateByUrl(`clientes/perfilCliente/${cliente.nombre}`);
  }
}
