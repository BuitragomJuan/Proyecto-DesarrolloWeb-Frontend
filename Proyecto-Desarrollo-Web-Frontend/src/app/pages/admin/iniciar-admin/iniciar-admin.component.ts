import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
//import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-admin',
  templateUrl: './iniciar-admin.component.html',
  styleUrls: ['./iniciar-admin.component.css'],
})
export class IniciarAdminComponent {
  adminEmail: string = '';
  adminPassword: string = '';
  mensajeError: string = '';

  constructor(private router: Router){}

  onSubmit() {
    this.router.navigate(['/welcome']);
  }
}

