import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent {
  nombre: string = '';
  id: string = '';
  correo: string = '';
  password: string = '';

  constructor(private authService: AutenticacionService, private router: Router) { }

  createAccountAdmin() {
    this.authService.registrarUsuarioAdmin(this.nombre, this.correo, this.password, this.id).pipe(
      tap(response => {
        console.log('Cuenta creada exitosamente', response);
        localStorage.setItem('token', response.token)
        this.router.navigate(['/welcome']);
      }),
      catchError(error => {
        console.error('Error al crear la cuenta', error);
        throw error;
      })
    );
  }
}
