import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logged: string = "block";
  notLogged: string = "none";

  flipButtons(estado:boolean){
    if (estado) {
      this.logged = "block";
      this.notLogged = "none";
    } else {
      this.logged = "none";
      this.notLogged = "block";
    }
  }

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private registerService: RegisterService,
    private router: Router
  ) {
    this.authService.loginStatus.subscribe((status: boolean) => {
      this.flipButtons(status);
    });
  }

  logOut() {
    this.authService.clearToken();
    console.log(this.logged,this.notLogged);
    this.router.navigate(['/usuario/login']);
  }

}
