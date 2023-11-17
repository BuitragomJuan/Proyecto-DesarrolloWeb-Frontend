import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerListasService {
  private listasPorGenero: { genero: string; listas: string[] }[] = [
    {
      genero: 'Rock',
      listas: ['Rock Playlist 1', 'Rock Playlist 2', 'Rock Classics']
    },
    {
      genero: 'Pop',
      listas: ['Pop Hits', 'Pop Mix', 'Pop Love Songs']
    },
    // Agrega más géneros y listas de reproducción
  ];

  getListasPorGenero(genero: string) {
    return this.listasPorGenero.find((g) => g.genero === genero)?.listas || [];
  }
}

