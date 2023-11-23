import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/models/cancion.model';
import { Listas } from 'src/app/models/listas.model';
import { CancionesService } from 'src/app/services/Admin/canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {

  canciones: Cancion[] = [];
  listas: Listas[] = [];
  selectedCancion: any;
  cancionForm: FormGroup;
  editMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private cancionesService: CancionesService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.cancionForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      rating: ['', Validators.required],
      artista: ['', Validators.required],
      album: ['', Validators.required],
      listasID: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCanciones();
    this.loadListas();
  }

  loadListas() {
    this.cancionesService.getListas().subscribe((data) => {
      this.listas = data;
    });
  }

  loadCanciones() {
    this.cancionesService.getCanciones().subscribe((data) => {
      this.canciones = data;
    });
  }

  onSubmit() {
    const formValues = this.cancionForm.value;

    if (this.editMode) {
      this.cancionesService
        .updateCancion(this.selectedCancion.id, {
          nombre: formValues.nombre,
          genero: formValues.genero,
          rating: formValues.rating,
          artista: formValues.artista,
          album: formValues.album,
          lista: formValues.lista,
        })
        .subscribe(
          () => {
            this.loadCanciones();
            this.resetForm();
          },
          (error) => {
            this.errorMessage = 'Error al actualizar la canción.';
          }
        );
    } else {
      this.cancionesService
        .addCancion({
          nombre: formValues.nombre,
          genero: formValues.genero,
          rating: formValues.rating,
          artista: formValues.artista,
          album: formValues.album,
          lista: formValues.lista,
        })
        .subscribe(
          () => {
            this.loadCanciones();
            this.resetForm();
          },
          (error) => {
            this.errorMessage = 'Error al agregar la canción.';
          }
        );
    }
  }

  resetForm() {
    this.selectedCancion = undefined;
    this.editMode = false;
    this.errorMessage = '';
    this.cancionForm.reset();
  }

  onCancelClick() {
    this.resetForm();
    this.router.navigate(['/crud-canciones']);
  }

  editCancion(id: number) {
    if (id !== undefined) {
      this.cancionesService.getCancion(id).subscribe(
        (cancion) => {
          if (cancion) {
            this.selectedCancion = cancion;
            this.editMode = true;
            this.cancionForm.patchValue({
              nombre: cancion.nombre,
              genero: cancion.genero,
              rating: cancion.rating,
              artista: cancion.artista,
              album: cancion.album,
              lista: cancion.lista,
            });
          }
        },
        (error) => {
          this.errorMessage = 'Error al obtener la canción.';
        }
      );
    } else {
      console.error('ID de canción indefinido');
    }
  }

  deleteCancion(id: number) {
    if (id !== undefined) {
      this.cancionesService.deleteCancion(id).subscribe(
        () => {
          this.loadCanciones();
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'Error al eliminar la canción.';
        }
      );
    } else {
      console.error('ID de canción indefinido');
    }
  }
}

