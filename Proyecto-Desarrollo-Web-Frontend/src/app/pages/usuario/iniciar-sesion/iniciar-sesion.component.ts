import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  votanteEmail: string = '';
  votantePassword: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación para votantes
    if (this.votanteEmail === 'correo@admin.com' && this.votantePassword === 'contraseña') {
      // Autenticación exitosa, puedes redirigir a la página de votante
      //this.router.navigate(['/bienvenida']); // Ajusta la ruta según tu aplicación
    } else {
      // Autenticación fallida, muestra un mensaje de error
    }
  }

}
