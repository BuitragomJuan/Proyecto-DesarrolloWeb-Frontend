// autenticacion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private apiUrl = 'http://localhost:9090'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  registrarUsuarioAdmin(nombre: string, correo: string, password: string, id:string): Observable<any> {
    // Lógica para enviar la solicitud de registro al backend
    const url = `${this.apiUrl}/signup/administrador`;
    const body = {nombre, correo, password, id};
    return this.http.post(url, body);
  }
  authenticateAdmin(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;  // Ajusta la URL según la ruta de autenticación en tu backend
    const body = { username: email, password };

    return this.http.post(url, body);
  }
  registrarUsuarioVotante(nombre: string, correo: string, password: string, id:string): Observable<any>{
    const url = `${this.apiUrl}/signup/votante`;
    const body = {nombre, correo, password, id};
    return this.http.post(url, body);
  }
  authenticateVotante(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;  // Ajusta la URL según la ruta de autenticación en tu backend
    const body = { username: email, password };

    return this.http.post(url, body);
  }

  iniciarSesion(usuario: any): Observable<any> {
    // Lógica para enviar la solicitud de inicio de sesión al backend
    return this.http.post(`${this.apiUrl}/authenticate`, usuario).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }

  obtenerCabeceras(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Usar estas cabeceras en tus solicitudes HTTP
}
