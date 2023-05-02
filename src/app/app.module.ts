import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { RegisterComponent } from './pages/usuario/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { NoPaginaComponent } from './pages/no-pagina/no-pagina.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PerfilClienteComponent } from './pages/clientes/perfil-cliente/perfil-cliente.component';
import { PerfilCuentaComponent } from './pages/perfil-cuenta/perfil-cuenta.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { TablaClientesComponent } from './pages/clientes/tabla-clientes/tabla-clientes.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CuentaComponent } from './pages/usuario/cuenta/cuenta.component';


import { SocialLoginModule, SocialAuthServiceConfig, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {GoogleLoginProvider} from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    NoPaginaComponent,
    ClientesComponent,
    PerfilClienteComponent,
    PerfilCuentaComponent,
    NuevoClienteComponent,
    TablaClientesComponent,
    UsuarioComponent,
    CuentaComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleSigninButtonModule,
    SocialLoginModule
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '264879683267-spjp2jpn7vqorbodu9n6s7mjgf24rn7l.apps.googleusercontent.com'
          )
        },

      ],
      onError: (err) => {
        console.error(err);
      }
    } as SocialAuthServiceConfig,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }