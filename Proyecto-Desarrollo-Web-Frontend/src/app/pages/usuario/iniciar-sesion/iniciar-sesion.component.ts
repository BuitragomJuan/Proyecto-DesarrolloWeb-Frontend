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
  correo: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private authService: AutenticacionService, private router: Router){}

  onSubmit() {
    // Lógica de autenticación utilizando el servicio AutenticacionService
    this.authService.authenticateVotante(this.correo, this.password).pipe(
      tap(response => {
        // Autenticación exitosa, redirigir a la página de administrador
        this.router.navigate(['/bienvenida']); // Ajusta la ruta según tu aplicación
      }),
      catchError(error => {
        console.error('Error during authentication:', error);
        throw error;
    })
    ).subscribe();
  }

}
