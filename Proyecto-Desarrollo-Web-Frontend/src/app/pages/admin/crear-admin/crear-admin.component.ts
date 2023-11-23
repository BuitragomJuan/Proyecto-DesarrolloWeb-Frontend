import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
//import { AutenticacionService } from 'src/app/services/autenticacion.service';

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

  constructor(private router: Router) { }

  createAccountAdmin() {
    this.router.navigate(['/welcome']);
  }
}
