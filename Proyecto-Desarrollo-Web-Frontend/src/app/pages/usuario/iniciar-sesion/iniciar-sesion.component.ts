import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
//import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  correo: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(private router: Router){}

  onSubmit() {
    this.router.navigate(['/bienvenida']);
  }

}
