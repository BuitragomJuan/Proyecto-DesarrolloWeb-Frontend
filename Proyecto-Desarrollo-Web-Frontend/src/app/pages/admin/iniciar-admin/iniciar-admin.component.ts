import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciar-admin',
  templateUrl: './iniciar-admin.component.html',
  styleUrls: ['./iniciar-admin.component.css'],
})
export class IniciarAdminComponent {
  adminEmail: string = '';
  adminPassword: string = '';

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación para administradores
    if (this.adminEmail === 'correo@admin.com' && this.adminPassword === 'contraseña') {
      // Autenticación exitosa, puedes redirigir a la página de administrador
      // this.router.navigate(['/dashboard-admin']); // Ajusta la ruta según tu aplicación
    } else {
      // Autenticación fallida, muestra un mensaje de error
    }
  }
}

