import { Component } from '@angular/core';
import { NewUser } from 'src/app/shared/interfaces/new-user';
import { Token } from 'src/app/shared/interfaces/token';
import { RegisterService } from 'src/app/shared/services/register.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  nuevoUsuario: NewUser = {
    email: '',
    username: '',
    password: ''
  }

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router
  ) { }

  register(event: Event) {
    event.preventDefault();

    console.log("=========================Entro a register en register.component");
    const pass = (document.getElementById('password') as HTMLInputElement).value;
    const conf = (document.getElementById('confirmar') as HTMLInputElement).value;

    if (pass == conf) {
      this.nuevoUsuario.email = (document.getElementById('correo') as HTMLInputElement).value;
      this.nuevoUsuario.username = (document.getElementById('username') as HTMLInputElement).value;
      this.nuevoUsuario.password = pass;

      this.registerService.register(this.nuevoUsuario).subscribe((response: Token) => {
        this.authService.setToken(response.token);
        console.log("Impresion de token");
        this.authService.getToken();
        console.log("Se termino el proceso de registro de usuario")



        this.router.navigate(['/']);

      });
    }else{
      console.log("Las contraseñas no coinciden");
    }
  }

}
