import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.component.html',
  styleUrls: ['./crear-admin.component.css']
})
export class CrearAdminComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';

  createAccount() {
    // Aquí se debe implementar la lógica para enviar los datos al servidor y crear la cuenta.
    // Puedes utilizar un servicio para hacer una solicitud POST al servidor.
    // Ejemplo: this.authService.createAccount(this.nombre, this.correo, this.contraseña);
  }
}
