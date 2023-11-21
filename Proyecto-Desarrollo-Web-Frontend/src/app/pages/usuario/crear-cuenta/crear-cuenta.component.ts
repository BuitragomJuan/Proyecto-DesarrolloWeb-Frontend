import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { AutenticacionService } from 'src/app/services/autenticacion.service';


@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  nombre: string = '';
  id: string = '';
  correo: string = '';
  password: string = '';

  constructor(private authService: AutenticacionService, private router: Router) { }
  
  createAccountVotante() {
    this.authService.registrarUsuarioVotante(this.nombre, this.correo, this.password, this.id).pipe(
      tap(response => {
          if (response instanceof HttpErrorResponse && response.error instanceof ProgressEvent) {
              console.error('Error al crear la cuenta', response);
          } else {
              console.log('Cuenta creada exitosamente', response);
              this.router.navigate(['/bienvenida']);
          }
      }),
      catchError(error => {
          console.error('Error al crear la cuenta', error);
          this.router.navigate(['/bienvenida']);
          throw error;
      })
  ).subscribe();
  }
}
