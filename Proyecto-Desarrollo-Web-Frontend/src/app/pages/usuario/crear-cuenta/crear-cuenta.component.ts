import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    this.authService.registrarUsuarioVotante(this.nombre, this.correo, this.password, this.id).subscribe(
      (response)=>{
        console.log('Cuenta creada exitosamente', response);
        this.router.navigate(['/bienvenida']);
      },
      (error) => {
        console.error('Error al crear la cuenta', error);
      }
    );
  }
}
