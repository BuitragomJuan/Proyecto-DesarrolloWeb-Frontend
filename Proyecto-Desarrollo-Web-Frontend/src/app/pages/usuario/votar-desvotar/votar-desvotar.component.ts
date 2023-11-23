import { Component, OnInit } from '@angular/core';
import { VotarDesvotarService } from 'src/app/services/Usuario/votar-desvotar.service';

@Component({
  selector: 'app-votar-desvotar',
  templateUrl: './votar-desvotar.component.html',
  styleUrls: ['./votar-desvotar.component.css']
})

export class VotarDesvotarComponent implements OnInit {
  canciones: any[] = [];
  votos: { [cancionId: number]: number } = {};

  constructor(private votacionService: VotarDesvotarService) {}

  ngOnInit() {
    this.votacionService.votos$.subscribe(votos => {
      this.votos = votos;
    });

    // Por simplicidad, asumimos que ya tenemos una lista de canciones
    this.canciones = [
      { id_cancion: 1, nombre: 'Canción 1' },
      { id_cancion: 2, nombre: 'Canción 2' },
      // Otras canciones
    ];
  }

  votar(cancionId: number) {
    this.votacionService.votar(cancionId);
  }

  desvotar(cancionId: number) {
    this.votacionService.desvotar(cancionId);
  }

  obtenerTotalVotos(cancionId: number): number {
    return this.votos[cancionId] || 0;
  }

}