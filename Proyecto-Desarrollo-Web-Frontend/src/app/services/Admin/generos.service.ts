// genre.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Cancion } from 'src/app/models/cancion.model';
import { Lista } from 'src/app/models/lista.model';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  listaURL = 'http://localhost:9092/lista/';

  constructor(private HttpClient: HttpClient){}

  public getListas(): Observable<Lista[]> {
    return this.HttpClient.get<Lista[]>(this.listaURL + 'listas');
  }
  public getListasById(id: number): Observable<Lista> {
    return this.HttpClient.get<Lista>(this.listaURL + `detail/${id}`);
  }
  public createLista(listas: Lista): Observable<Lista> {
    return this.HttpClient.post<Lista>(this.listaURL + `create`, listas);
  }

  public updateLista(id: number, listas: Lista): Observable<Lista> {
    return this.HttpClient.put<Lista>(this.listaURL + `update/${id}`, listas);
  }

  public deleteLista(id: number): Observable<Lista> {
    return this.HttpClient.delete<Lista>(this.listaURL + `delete/${id}`);
  }
}


