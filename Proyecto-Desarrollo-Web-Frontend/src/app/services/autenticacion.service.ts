// autenticacion.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private apiUrl = 'http://localhost:9090'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  registrarUsuarioAdmin(nombre: string, correo: string, password: string, id:string): Observable<any> {
    // Lógica para enviar la solicitud de registro al backend
    const url = `${this.apiUrl}/api/admin/registro`;
    const body = {nombre, correo, password, id};
    return this.http.post(url, body).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }
  authenticateAdmin(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/authenticate`;  // Ajusta la URL según la ruta de autenticación en tu backend
    const body = { username: email, password };

    return this.http.post(url, body).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }
  registrarUsuarioVotante(nombre: string, correo: string, password: string, id:string): Observable<any>{
    const url = `${this.apiUrl}/api/votante/registro`;
    const body = {nombre, correo, password, id};
    return this.http.post(url, body).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }
  authenticateVotante(correo: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/api/authenticate`;
    const body = { correo, password };

    return this.http.post(url, body).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      }),
      catchError((error) => {
        console.error('Authentication error:', error);
        return throwError(error);
      })
    );
  }

  obtenerCabeceras(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  // Usar estas cabeceras en tus solicitudes HTTP
}
