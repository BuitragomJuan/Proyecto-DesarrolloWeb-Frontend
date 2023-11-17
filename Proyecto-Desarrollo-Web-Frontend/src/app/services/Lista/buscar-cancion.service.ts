import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarCancionService {
  private canciones: any[] = [
    { id: 1, nombre: 'Canción 1', artista: 'Artista 1' },
    { id: 2, nombre: 'Canción 2', artista: 'Artista 2' },
    { id: 3, nombre: 'Canción 3', artista: 'Artista 3' },
    // ... otras canciones
  ];

  buscarCancion(term: string): Observable<any[]> {
    term = term.toLowerCase();
    const resultados = this.canciones.filter(cancion => cancion.nombre.toLowerCase().includes(term));
    return of(resultados);
  }

  // Otros métodos del servicio para CRUD de canciones, según sea necesario
  // ...
}
