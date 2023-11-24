import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cancion } from 'src/app/models/cancion.model';
import { Lista } from 'src/app/models/lista.model';

@Injectable({
  providedIn: 'root'
})

export class CancionesService {

  cancionURL= 'http://localhost:9092/cancion/';
  listaURL = 'http://localhost:9092/lista/';

  constructor(private HttpClient: HttpClient){}

  public getCanciones(): Observable<Cancion[]> {
    return this.HttpClient.get<Cancion[]>(this.cancionURL + 'lista');
  }

  public getCancion(id: number): Observable<Cancion> {
    return this.HttpClient.get<Cancion>(this.cancionURL + `detail/${id}`);
  }

  public getListas(): Observable<Lista[]> {
    return this.HttpClient.get<Lista[]>(this.listaURL + 'listas');
  }

  public addCancion(cancion: Cancion): Observable<Cancion> {
    return this.HttpClient.post<Cancion>(this.cancionURL + `create`, cancion);
  }

  public updateCancion(id: number, cancion: Cancion): Observable<Cancion> {
    return this.HttpClient.put<Cancion>(this.cancionURL + `update/${id}`, cancion);
  }

  public deleteCancion(id: number): Observable<Cancion> {
    return this.HttpClient.delete<Cancion>(this.cancionURL + `delete/${id}`);
  }
}
