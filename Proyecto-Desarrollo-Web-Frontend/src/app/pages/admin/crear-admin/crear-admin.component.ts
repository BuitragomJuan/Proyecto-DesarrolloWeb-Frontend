import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    this.authService.registrarUsuarioAdmin(this.nombre, this.correo, this.password, this.id).subscribe(
      (response)=>{
        console.log('Cuenta creada exitosamente', response);
        this.router.navigate(['/welcome']);
      },
      (error) => {
        console.error('Error al crear la cuenta', error);
      }
    );
  }
}
