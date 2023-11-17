import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-type-selection',
  templateUrl: './seleccion-usuario.component.html',
  styleUrls: ['./seleccion-usuario.component.css']
})

export class SeleccionUsuarioComponent {

  constructor(private router: Router) { }

  // Método para manejar la selección de tipo de usuario
  selectUserType(userType: string) {
    // Aquí podrías realizar acciones específicas según el tipo de usuario seleccionado
    // Por ejemplo, redireccionar a la página de inicio de sesión correspondiente

    if (userType === 'admin') {
      this.router.navigate(['/iniciar-admin']); // Redirige a la página de inicio de sesión de admin
      
    } else if (userType === 'usuario') {
      this.router.navigate(['/iniciar-sesion']); // Redirige a la página de inicio de sesión de usuario
    }
  }
}
