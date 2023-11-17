// genre.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Genero {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private genres: Genero[] = []; // Deberías obtener esto de tu backend

  getGenres(): Observable<Genero[]> {
    return of(this.genres);
  }

  getGenre(id: number): Observable<Genero | undefined> {
    return of(this.genres.find(genre => genre.id === id));
  }

  addGenre(genre: Genero): void {
    // Lógica para agregar un nuevo género (puedes realizar una llamada HTTP aquí)
    this.genres.push(genre);
  }

  updateGenre(genre: Genero): void {
    // Lógica para actualizar un género existente (puedes realizar una llamada HTTP aquí)
    const index = this.genres.findIndex(existingGenre => existingGenre.id === genre.id);
    if (index !== -1) {
      this.genres[index] = genre;
    }
  }

  deleteGenre(id: number): void {
    // Lógica para eliminar un género (puedes realizar una llamada HTTP aquí)
    this.genres = this.genres.filter(genre => genre.id !== id);
  }
}


