import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  
  nombre: string = '';
  correo: string = '';
  password: string = '';

  createAccount() {
    // Aquí se debe implementar la lógica para enviar los datos al servidor y crear la cuenta.
    // Puedes utilizar un servicio para hacer una solicitud POST al servidor.
    // Ejemplo: this.authService.createAccount(this.nombre, this.correo, this.contraseña);
    //this.router.navigate(['/bienvenida']);
  }
}
