import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/usuario/login/login.component';
import { RegisterComponent } from './pages/usuario/register/register.component';
import { NoPaginaComponent } from './pages/no-pagina/no-pagina.component';
import { PerfilClienteComponent } from './pages/clientes/perfil-cliente/perfil-cliente.component';
import { PerfilCuentaComponent } from './pages/perfil-cuenta/perfil-cuenta.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { NuevoClienteComponent } from './pages/clientes/nuevo-cliente/nuevo-cliente.component';
import { TablaClientesComponent } from './pages/clientes/tabla-clientes/tabla-clientes.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  {
    path: 'usuario', component: UsuarioComponent, children: [
      { path: '', component: PerfilCuentaComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'perfilCuenta', component: PerfilCuentaComponent },
  {
    path: 'clientes', component: ClientesComponent, children: [
      { path: '', component: TablaClientesComponent },
      { path: 'nuevoCliente', component: NuevoClienteComponent },
      { path: 'perfilCliente', component: PerfilClienteComponent }
    ]
  },

  { path: '**', component: NoPaginaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
