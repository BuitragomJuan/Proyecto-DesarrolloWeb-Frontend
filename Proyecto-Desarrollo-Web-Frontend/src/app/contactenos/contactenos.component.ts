import { DatePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { ContactenosService } from '../services/contactenos/contactenos.service';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

  @ViewChild('charsName') charsName: ElementRef | undefined;
  @ViewChild('charslst') charslst: ElementRef | undefined;
  @ViewChild('charDate') charDate: ElementRef | undefined;
  @ViewChild('charAge01') charAge01: ElementRef | undefined;
  @ViewChild('charAge02') charAge02: ElementRef | undefined;

  formData: any = {
    nombre: '',
    apellido: '',
    fecha: '',
    edad: '',
  };

  constructor(private datePipe: DatePipe,private  contactenosService: ContactenosService) {}

  submitForm() {

    this.formData.fecha = this.datePipe.transform(this.formData.fecha, 'yyyy-MM-dd');
   
      this.contactenosService.saveContactenosData(this.formData).pipe(
        tap(response => {
          console.log('Form data sent successfully:', response);

        }),

        catchError(error => {
          console.error('Error sending form data:', error);
          throw error;
        })
      ).subscribe();

  }
}
