import { Component } from '@angular/core';


@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent {

  descripcion:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis repellat eaque fugiat numquam, perspiciatis corporis expedita at, ut distinctio molestiae voluptas non tenetur quo. Quibusdam vero fugiat saepe doloribus alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ut qui alias dignissimos dolore atque ullam hic ratione magni ipsa sit possimus, nostrum asperiores laborum vitae praesentium libero commodi vel. lorem";



  edit:boolean = false;

  btn1: string = "block";
  btn2: string = "none";


  toggleEdit() {
    this.edit = !this.edit;
    this.btn1 = (this.btn1 == "block")?"none":"block";
    this.btn2 = (this.btn2 == "block")?"none":"block";

  }

}
