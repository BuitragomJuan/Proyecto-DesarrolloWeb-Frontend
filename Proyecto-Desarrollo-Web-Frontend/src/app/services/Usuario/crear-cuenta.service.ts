import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaService {
  private apiUrl = 'URL_DEL_BACKEND'; // Reemplaza con la URL real del backend

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: any) {
    // Realiza una solicitud HTTP POST para registrar un nuevo usuario
    return this.http.post(`${this.apiUrl}/registro`, usuario); // Actualiza la URL si es necesario
  }
}
