// generos.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Listas } from 'src/app/models/listas.model';
import { GeneroService } from 'src/app/services/Admin/generos.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {
  listas: Listas[] = [];
  selectedLista: any;
  listaForm: FormGroup;
  editMode: boolean = false;
  errorMessage: string = '';
  //originalRoute: string = '';

  constructor(private generoService: GeneroService, private fb: FormBuilder, private router: Router) {
    this.listaForm = this.fb.group({
      genero: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadListas();
    this.initForm();
  }

  loadListas() {
    this.generoService.getListas().subscribe(data => {
      this.listas = data;
    });
  }

  initForm() {
    this.listaForm = this.fb.group({
      genero: ['', Validators.required],
    });
  }

  onSubmit() {
    const formValues = this.listaForm.value;
    
    if (this.editMode) {
      // Lógica para editar un género existente
      this.generoService.updateLista(this.selectedLista.id,{
        id: this.selectedLista.id,
        genero: formValues.genero,
      }).subscribe(
        () => {
          this.loadListas();
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'Error al actualizar el género.';
        }
      );
    } else {
      this.generoService.createLista({
        genero: formValues.genero,
      }).subscribe(
        () => {
          this.loadListas();
          this.resetForm();
        },
        (error) => {
          this.errorMessage = 'Error al agregar el género.';
        }
      );
    }

    this.loadListas(); // Recargar la lista después de agregar o editar un género
    this.resetForm();
    
  }

  resetForm() {
    this.selectedLista = undefined;
    this.editMode = false;
    this.errorMessage = '';
    this.listaForm.reset();
  }


  onCancelClick() {
    this.resetForm();
  
    this.router.navigate(['/crud-generos']); // Redirige a la página de bienvenida si no estás en modo de edición o la ruta original es '/crud-generos'
  
  }

  editLista(id: number) {
    if (id !== undefined) {
      this.generoService.getListasById(id).subscribe(
        (lista) => {
          if (lista) {
            this.selectedLista = lista;
            this.editMode = true;
            this.listaForm.patchValue({
              genero: lista.genero,
            });
          }
        },
        (error) => {
          this.errorMessage = 'Error al obtener el género.';
        }
      );
    } else {
      console.error('ID indefinido');
    }
  }
  
  deleteLista(id: number) {
    if (id !== undefined) {
      this.generoService.deleteLista(id).subscribe(
        () => {
          this.loadListas();
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

