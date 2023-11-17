import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { CancionesComponent } from './pages/admin/canciones/canciones.component';
import { CrearAdminComponent } from './pages/admin/crear-admin/crear-admin.component';
import { GenerosComponent } from './pages/admin/generos/generos.component';
import { IniciarAdminComponent } from './pages/admin/iniciar-admin/iniciar-admin.component';
import { BienvenidaComponent } from './pages/home/bienvenida/bienvenida.component';
import { WelcomeComponent } from './pages/homeAdmin/welcome/welcome.component';
import { BuscarCancionComponent } from './pages/listas/buscar-cancion/buscar-cancion.component';
import { VerListasComponent } from './pages/listas/ver-listas/ver-listas.component';
import { VotarDesvotarComponent } from './pages/listas/votar-desvotar/votar-desvotar.component';
import { SeleccionUsuarioComponent } from './pages/tipoUsuario/seleccion-usuario/seleccion-usuario.component';
import { CrearCuentaComponent } from './pages/usuario/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './pages/usuario/iniciar-sesion/iniciar-sesion.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'equipo', component: EquipoComponent},
  {path: 'contactenos', component: ContactenosComponent},
  {path: 'seleccion-usuario', component: SeleccionUsuarioComponent},
  {path: 'iniciar-admin', component: IniciarAdminComponent},
  {path: "crear-admin", component: CrearAdminComponent},
  {path: "welcome", component:WelcomeComponent},
  {path: 'crud-generos', component: GenerosComponent},
  {path: 'crud-canciones', component: CancionesComponent},
  {path: "iniciar-sesion", component: IniciarSesionComponent},
  {path: 'crear-cuenta', component: CrearCuentaComponent },
  {path: "bienvenida", component: BienvenidaComponent},
  {path: 'ver-listas', component: VerListasComponent },
  {path: 'buscar-cancion', component: BuscarCancionComponent},
  {path: 'votar-desvotar', component: VotarDesvotarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
