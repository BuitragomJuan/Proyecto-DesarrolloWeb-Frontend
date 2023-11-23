import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cancion } from 'src/app/models/cancion.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarCancionService {

  private verCancionesURL = 'http://localhost:9090/cancion/';

  constructor(private httpClient: HttpClient) { }


  public buscarCanciones(nombre: string, artista: string, genero: string): Observable<Cancion[]> {
    let params = new HttpParams();
    if (nombre) params = params.set('nombre', nombre);
    if (artista) params = params.set('artista', artista);
    if (genero) params = params.set('genero', genero);

    return this.httpClient.get<Cancion[]>(this.verCancionesURL + 'buscar', { params: params });
  }

  public getCanciones(): Observable<Cancion[]> {
    return this.httpClient.get<Cancion[]>(this.verCancionesURL + 'lista');
  }

  // Otros métodos del servicio para CRUD de canciones, según sea necesario
  // ...
}
