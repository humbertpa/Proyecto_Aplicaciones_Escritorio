import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  logged: string = "block";
  notLogged: string = "none";

  flipButtons(estado: boolean) {
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
    private socialAuthService: SocialAuthService,
    private router: Router,
  ) {
    this.authService.loginStatus.subscribe((status: boolean) => {
      this.flipButtons(status);
    });

    this.socialAuthService.authState.subscribe(user => {
      if (user) {
        console.log('Usuario', user);
        //validar idToken en la api
        this.loginService.googleLogin(user).subscribe({
          next: (response) => {
            this.authService.setToken(response.token);
            this.router.navigate(['/']);
          },
          error: (error) => { }

        })
      }
    })

  }

  logOut() {
    this.authService.clearToken();
    console.log(this.logged, this.notLogged);
    this.router.navigate(['/usuario/login']);
  }

}
