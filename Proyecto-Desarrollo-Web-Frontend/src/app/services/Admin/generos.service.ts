// genre.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
//import { Cancion } from 'src/app/models/cancion.model';
import { Listas } from 'src/app/models/listas.model';


@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  listaURL = 'http://localhost:9090/lista/';

  constructor(private HttpClient: HttpClient){}

  public getListas(): Observable<Listas[]> {
    return this.HttpClient.get<Listas[]>(this.listaURL + 'listas');
  }
  public getListasById(id: number): Observable<Listas> {
    return this.HttpClient.get<Listas>(this.listaURL + `detail/${id}`);
  }
  public createLista(listas: Listas): Observable<Listas> {
    return this.HttpClient.post<Listas>(this.listaURL + `create`, listas);
  }

  public updateLista(id: number, listas: Listas): Observable<Listas> {
    return this.HttpClient.put<Listas>(this.listaURL + `update/${id}`, listas);
  }

  public deleteLista(id: number): Observable<Listas> {
    return this.HttpClient.delete<Listas>(this.listaURL + `delete/${id}`);
  }
}


