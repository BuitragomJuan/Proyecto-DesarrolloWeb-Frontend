import { Component, OnInit } from '@angular/core';
import { CancionesService } from 'src/app/services/Admin/canciones.service';
@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  canciones: any[] = [];
  constructor(private cancionesService: CancionesService) {}

  ngOnInit() {
    this.loadCanciones();
  }
  
  loadCanciones() {
    this.cancionesService.getCanciones().subscribe(data => {
      this.canciones = data;
      console.log('Lista de Canciones:', this.canciones);
    });
  }
}