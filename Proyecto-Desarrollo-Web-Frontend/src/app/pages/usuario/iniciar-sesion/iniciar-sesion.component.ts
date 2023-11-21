import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  votanteEmail: string = '';
  votantePassword: string = '';
  mensajeError: string = '';

  constructor(private authService: AutenticacionService, private router: Router){}

  onSubmit() {
    // Lógica de autenticación utilizando el servicio AutenticacionService
    this.authService.authenticateVotante(this.votanteEmail, this.votantePassword).pipe(
      tap(response => {
        // Autenticación exitosa, redirigir a la página de administrador
        this.router.navigate(['/bienvenida']); // Ajusta la ruta según tu aplicación
      }),
      catchError(error => {
        // Autenticación fallida, mostrar un mensaje de error
        this.mensajeError = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        throw error;
      })
    ).subscribe();
  }

}
