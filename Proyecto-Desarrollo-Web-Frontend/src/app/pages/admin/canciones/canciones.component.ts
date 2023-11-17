import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CancionesService } from 'src/app/services/Admin/canciones.service';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css']
})

export class CancionesComponent implements OnInit {

  canciones: any[] = [];
  listas: any[] = [];
  selectedCancion: any;
  cancionForm: FormGroup;
  editMode: boolean = false;
  errorMessage: string = '';

  constructor(private cancionesService: CancionesService, private fb: FormBuilder, private router: Router) {
    this.cancionForm = this.fb.group({
      nombre: ['', Validators.required],
      genero: ['', Validators.required],
      rating: ['', Validators.required],
      artista: ['', Validators.required],
      album: ['', Validators.required],
      listasID: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadCanciones();
    this.loadListas();
  }

  loadListas() {
    this.cancionesService.getListas().subscribe(data => {
      this.listas = data;
    });
  }

  loadCanciones() {
    this.cancionesService.getCanciones().subscribe(data => {
      this.canciones = data;
    });
  }

  onSubmit() {
    const formValues = this.cancionForm.value;
    
    if (this.editMode) {
      // Lógica para editar una canción existente
      this.cancionesService.updateCancion({
        id: this.selectedCancion.id,
        nombre: formValues.nombre,
        genero: formValues.genero,
        rating: formValues.rating,
        artista: formValues.artista,
        album: formValues.album,
        listasID: formValues.listasID
      });
    } else {
      // Lógica para agregar una nueva canción
      this.cancionesService.addCancion({
        id: this.canciones.length + 1,
        nombre: formValues.nombre,
        genero: formValues.genero,
        rating: formValues.rating,
        artista: formValues.artista,
        album: formValues.album,
        listasID: formValues.listasID
      });
    }

    this.loadCanciones(); // Recargar la lista después de agregar o editar una canción
    this.resetForm();
  }

  resetForm() {
    this.selectedCancion = undefined;
    this.editMode = false;
    this.errorMessage = '';
    this.cancionForm.reset();
  }

  onCancelClick() {
    this.resetForm();
  
    this.router.navigate(['/crud-canciones']); // Redirige a la página de bienvenida si no estás en modo de edición o la ruta original es '/crud-generos'
  
  }

  editCancion(id: number) {
    this.cancionesService.getCancion(id).subscribe(cancion => {
      if (cancion) {
        this.selectedCancion = cancion;
        this.editMode = true;
        this.cancionForm.patchValue({
          nombre: cancion.nombre,
          genero: cancion.genero,
          rating: cancion.rating,
          artista: cancion.artista,
          album: cancion.album,
          listasID: cancion.listasID
        });
      }
    });
  }

  deleteCancion(id: number) {
    this.cancionesService.deleteCancion(id);
    this.loadCanciones(); // Recargar la lista después de eliminar una canción
    this.resetForm();
  }
}

