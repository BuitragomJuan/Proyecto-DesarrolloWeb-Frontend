import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuscarCancionService } from 'src/app/services/Lista/buscar-cancion.service';

@Component({
  selector: 'app-buscar-cancion',
  templateUrl: './buscar-cancion.component.html',
  styleUrls: ['./buscar-cancion.component.css']
})
export class BuscarCancionComponent implements OnInit {
  searchForm: FormGroup;
  resultados: any[] = [];

  constructor(private fb: FormBuilder, private BuscarCancionService: BuscarCancionService) {
    this.searchForm = this.fb.group({
      term: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Inicialización si es necesaria
  }

  buscar() {
    const term = this.searchForm.value.term;

    // Lógica para buscar la canción utilizando el servicio
    this.BuscarCancionService.buscarCancion(term).subscribe((data: any[]) => {
      this.resultados = data;
    });
  }
}