import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
//import { AutenticacionService } from 'src/app/services/autenticacion.service';


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

  constructor(private router: Router) { }
  
  createAccountVotante() {
    this.router.navigate(['/bienvenida']);
  }
}
