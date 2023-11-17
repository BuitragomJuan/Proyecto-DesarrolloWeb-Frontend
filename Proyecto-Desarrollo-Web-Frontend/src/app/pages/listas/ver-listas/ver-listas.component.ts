import { Component } from '@angular/core';
import { VerListasService } from 'src/app/services/Lista/ver-listas.service';

@Component({
  selector: 'app-ver-listas',
  templateUrl: './ver-listas.component.html',
  styleUrls: ['./ver-listas.component.css']
})
export class VerListasComponent {
  generoSeleccionado: string = 'Rock'; // Género musical predeterminado
  listasPorGenero: string[] = [];

  constructor(private verListasService: VerListasService) {
    this.actualizarListasPorGenero();
  } 

  actualizarListasPorGenero() {
    this.listasPorGenero = this.verListasService.getListasPorGenero(this.generoSeleccionado);
  }
}



