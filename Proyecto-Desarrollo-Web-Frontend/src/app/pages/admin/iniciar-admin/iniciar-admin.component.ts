import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-admin',
  templateUrl: './iniciar-admin.component.html',
  styleUrls: ['./iniciar-admin.component.css'],
})
export class IniciarAdminComponent {
  adminEmail: string = '';
  adminPassword: string = '';
  mensajeError: string = '';

  constructor(private authService: AutenticacionService, private router: Router){}

  onSubmit() {
    // Lógica de autenticación utilizando el servicio AutenticacionService
    this.authService.authenticateAdmin(this.adminEmail, this.adminPassword).pipe(
      tap(response => {
        // Autenticación exitosa, redirigir a la página de administrador
        this.router.navigate(['/welcome']); // Ajusta la ruta según tu aplicación
      }),
      catchError(error => {
        // Autenticación fallida, mostrar un mensaje de error
        this.mensajeError = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        throw error;
      })
    ).subscribe();
  }
}

