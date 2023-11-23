import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarCancionService } from 'src/app/services/Usuario/buscar-cancion.service';
import { Cancion } from 'src/app/models/cancion.model';

@Component({
  selector: 'app-buscar-cancion',
  templateUrl: './buscar-cancion.component.html',
  styleUrls: ['./buscar-cancion.component.css']
})
export class BuscarCancionComponent implements OnInit {
  canciones: Cancion[] = [];
  searchForm: FormGroup;
  nombre: string = '';
  artista: string = '';
  genero: string = '';

  constructor(private fb: FormBuilder, private BuscarCancionService: BuscarCancionService) {
    this.searchForm = this.fb.group({
      term: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Inicialización si es necesaria
    this.loadCanciones();
  }

  loadCanciones() {
    this.BuscarCancionService.getCanciones().subscribe((data) => {
      this.canciones = data;
    });
  }

  buscarCanciones() {
    this.BuscarCancionService.buscarCanciones(this.nombre, this.artista, this.genero)
      .subscribe(
        (canciones) => {
          this.canciones = canciones;
        },
        (error) => {
          console.error('Error al buscar canciones:', error);
        }
      );
  }
}