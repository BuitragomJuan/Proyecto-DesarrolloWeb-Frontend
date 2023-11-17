// generos.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneroService } from 'src/app/services/Admin/generos.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  genres: any[] = [];
  selectedGenre: any;
  genreForm: FormGroup;
  editMode: boolean = false;
  errorMessage: string = '';
  originalRoute: string = '';

  constructor(private generoService: GeneroService, private fb: FormBuilder, private router: Router) {
    this.genreForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadGenres();
    this.initForm();
  }

  loadGenres() {
    this.generoService.getGenres().subscribe(data => {
      this.genres = data;
    });
  }

  initForm() {
    this.genreForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    const formValues = this.genreForm.value;
    
    if (this.editMode) {
      // Lógica para editar un género existente
      this.generoService.updateGenre({
        id: this.selectedGenre.id,
        name: formValues.name,
        description: formValues.description
      });
    } else {
      // Lógica para agregar un nuevo género
      this.generoService.addGenre({
        id: this.genres.length + 1,
        name: formValues.name,
        description: formValues.description
      });
    }

    this.loadGenres(); // Recargar la lista después de agregar o editar un género
    this.resetForm();
    
  }

  resetForm() {
    this.selectedGenre = undefined;
    this.editMode = false;
    this.errorMessage = '';
    this.genreForm.reset();
  }


  onCancelClick() {
    this.resetForm();
  
    this.router.navigate(['/crud-generos']); // Redirige a la página de bienvenida si no estás en modo de edición o la ruta original es '/crud-generos'
  
  }

  editGenre(id: number) {
  
    this.generoService.getGenre(id).subscribe(genre => {
      if (genre) {
        this.selectedGenre = genre;
        this.editMode = true;
        this.genreForm.patchValue({
          name: genre.name,
          description: genre.description
        });
      }
    });
  }
  

  deleteGenre(id: number) {
    this.generoService.deleteGenre(id);
    this.loadGenres(); // Recargar la lista después de eliminar un género
    this.resetForm();
  }
}

