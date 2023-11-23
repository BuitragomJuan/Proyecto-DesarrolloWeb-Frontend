import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Listas } from 'src/app/models/listas.model';
import { Cancion } from 'src/app/models/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class VerListasService {
  private verListasURL = 'http://localhost:9090/lista/';

  constructor(private httpClient: HttpClient) {}

  public getListas(): Observable<Listas[]> {
    return this.httpClient.get<Listas[]>(this.verListasURL + 'listas');
  }

  public getListaById(id: number): Observable<Listas> {
    return this.httpClient.get<Listas>(this.verListasURL + `detail/${id}`);
  }

  public getListaByGenero(genero: string): Observable<Listas> {
    return this.httpClient.get<Listas>(this.verListasURL + `detailgenero/${genero}`);
  }
  getCancionesPorLista(id: number): Observable<Cancion[]> {
    return this.httpClient.get<Cancion[]>(this.verListasURL + `cancionesPorLista/${id}`);
  }
}
