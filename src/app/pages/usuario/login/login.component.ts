import { Component } from '@angular/core';

import { Credenciales } from 'src/app/shared/interfaces/credenciales';
import { Token } from 'src/app/shared/interfaces/token';

import { LoginService } from 'src/app/shared/services/login.service';
import { AuthService } from 'src/app/shared/services/auth.service';

import { Router } from '@angular/router';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  usuario: Credenciales = {
    email:'',
    password:''
  }

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router
  ) { }

  logIn(event: Event) {
    
    console.log("Entro a logIn en login.component ====================================================");
    event.preventDefault();

      this.usuario.email = (document.getElementById('correo') as HTMLInputElement).value;
      this.usuario.password = (document.getElementById('password') as HTMLInputElement).value;

      this.loginService.login(this.usuario).subscribe((response: Token) => {
        this.authService.setToken(response.token);
        console.log("Impresion de token");
        this.authService.getToken();
        console.log("Se termino el proceso de login de usuario")
        this.router.navigate(['/']);
      });
  }
}
