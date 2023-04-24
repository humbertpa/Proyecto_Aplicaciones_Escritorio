import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { IndexComponent } from './pages/index/index.component';
import { NoPaginaComponent } from './pages/no-pagina/no-pagina.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PerfilClienteComponent } from './pages/clientes/perfil-cliente/perfil-cliente.component';
import { PerfilCuentaComponent } from './pages/perfil-cuenta/perfil-cuenta.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { TablaClientesComponent } from './pages/clientes/tabla-clientes/tabla-clientes.component';

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
    TablaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
