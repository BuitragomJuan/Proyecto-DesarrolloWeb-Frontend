import { Component, OnInit } from '@angular/core';
import { VerListasService } from 'src/app/services/Usuario/ver-listas.service';
import { Lista } from 'src/app/models/lista.model';
import { Cancion } from 'src/app/models/cancion.model';

@Component({
  selector: 'app-ver-listas',
  templateUrl: './ver-listas.component.html',
  styleUrls: ['./ver-listas.component.css']
})
export class VerListasComponent {
  listas: Lista[] = [];
  canciones: Cancion[] = [];
  selectedLista: Lista | undefined;

  constructor(private verListasService: VerListasService) { }

  ngOnInit() {
    this.loadListas();
  }

  loadListas() {
    this.verListasService.getListas().subscribe((data) => {
      this.listas = data;
    });
  }

  verCanciones(lista: Lista) {
    this.selectedLista = lista;
    // Llama al servicio para obtener las canciones de la lista seleccionada
    this.verListasService.getCancionesPorLista(lista.id!).subscribe(
      (canciones) => {
        this.canciones = canciones;
      },
      (error) => {
        console.error('Error al obtener las canciones:', error);
      }
    );
  }
}



