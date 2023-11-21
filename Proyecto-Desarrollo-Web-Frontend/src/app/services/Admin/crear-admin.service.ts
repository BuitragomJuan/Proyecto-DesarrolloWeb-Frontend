import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearAdminService {

  private apiUrl = 'http://localhost:9090'; // Reemplazar con la URL de tu backend

  constructor(private http: HttpClient) {}

  createAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/admin/registro`, adminData);
  }
}
