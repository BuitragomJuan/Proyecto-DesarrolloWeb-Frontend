import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { EquipoComponent } from './equipo/equipo.component';
import { CancionesComponent } from './pages/admin/canciones/canciones.component';
import { GenerosComponent } from './pages/admin/generos/generos.component';
import { BienvenidaComponent } from './pages/usuario/bienvenida/bienvenida.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { BuscarCancionComponent } from './pages/usuario/buscar-cancion/buscar-cancion.component';
import { VerListasComponent } from './pages/usuario/ver-listas/ver-listas.component';
import { VotarDesvotarComponent } from './pages/usuario/votar-desvotar/votar-desvotar.component';
import { SeleccionUsuarioComponent } from './pages/tipoUsuario/seleccion-usuario/seleccion-usuario.component';
import { CrearAdminComponent } from './pages/admin/crear-admin/crear-admin.component';
import { IniciarAdminComponent } from './pages/admin/iniciar-admin/iniciar-admin.component';
import { CrearCuentaComponent } from './pages/usuario/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './pages/usuario/iniciar-sesion/iniciar-sesion.component';

import { ProyectoComponent } from './proyecto/proyecto.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    EquipoComponent,
    ContactenosComponent,
    CrearCuentaComponent,
    IniciarSesionComponent,
    VerListasComponent,
    BuscarCancionComponent,
    VotarDesvotarComponent,
    CrearAdminComponent,
    IniciarAdminComponent,
    GenerosComponent,
    CancionesComponent,
    SeleccionUsuarioComponent,
    BienvenidaComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
