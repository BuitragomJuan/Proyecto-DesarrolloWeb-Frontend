import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lista } from 'src/app/models/lista.model';
import { Cancion } from 'src/app/models/cancion.model';

@Injectable({
  providedIn: 'root'
})
export class VerListasService {
  private verListasURL = 'http://localhost:9092/lista/';

  constructor(private httpClient: HttpClient) {}

  public getListas(): Observable<Lista[]> {
    return this.httpClient.get<Lista[]>(this.verListasURL + 'listas');
  }

  public getListaById(id: number): Observable<Lista> {
    return this.httpClient.get<Lista>(this.verListasURL + `detail/${id}`);
  }

  public getListaByGenero(genero: string): Observable<Lista> {
    return this.httpClient.get<Lista>(this.verListasURL + `detailgenero/${genero}`);
  }
  getCancionesPorLista(id: number): Observable<Cancion[]> {
    return this.httpClient.get<Cancion[]>(this.verListasURL + `cancionesPorLista/${id}`);
  }
}
