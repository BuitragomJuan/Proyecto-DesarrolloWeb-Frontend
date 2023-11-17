import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CancionesService {
  private canciones: any[] = [
    { 
      id: 1, 
      nombre: 'Canción 1', 
      genero: 'Rock', 
      rating: 4, 
      artista: 'Artista 1', 
      album: 'Álbum 1', 
      listasID: 1 
    },
    { 
      id: 2, 
      nombre: 'Canción 2', 
      genero: 'Pop', 
      rating: 5, 
      artista: 'Artista 2', 
      album: 'Álbum 2', 
      listasID: 1 
    },
    { 
      id: 3, 
      nombre: 'Canción 3', 
      genero: 'Hip Hop', 
      rating: 3, 
      artista: 'Artista 3', 
      album: 'Álbum 3', 
      listasID: 2 
    },
    // ... otras canciones
  ];

  private listas: any[] = [
    { id: 1, nombre: 'Lista 1' },
    { id: 2, nombre: 'Lista 2' },
    // ... otras listas
  ];  

  getCanciones(): Observable<any[]> {
    return of(this.canciones);
  }

  getCancion(id: number): Observable<any | undefined> {
    return of(this.canciones.find(cancion => cancion.id === id));
  }

  getListas(): Observable<any[]> {
    return of(this.listas);
  }

  addCancion(cancion: any): void {
    // Lógica para agregar una nueva canción (se realiza una llamada HTTP aquí)
    this.canciones.push(cancion);
  }

  updateCancion(cancion: any): void {
    // Lógica para actualizar una canción existente (se realiza una llamada HTTP aquí)
    const index = this.canciones.findIndex(existingCancion => existingCancion.id === cancion.id);
    if (index !== -1) {
      this.canciones[index] = cancion;
    }
  }

  deleteCancion(id: number): void {
    // Lógica para eliminar una canción (se realiza una llamada HTTP aquí)
    this.canciones = this.canciones.filter(cancion => cancion.id !== id);
  }
}
