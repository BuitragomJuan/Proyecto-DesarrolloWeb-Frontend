import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class VotarDesvotarService {
  private votosSubject = new BehaviorSubject<number[]>([]);
  votos$ = this.votosSubject.asObservable();

  constructor() {}

  votar(cancionId: number) {
    const votosActuales = this.votosSubject.value;
    this.votosSubject.next({ ...votosActuales, [cancionId]: (votosActuales[cancionId] || 0) + 1 });
  }

  desvotar(cancionId: number) {
    const votosActuales = this.votosSubject.value;
    if (votosActuales[cancionId] > 0) {
      this.votosSubject.next({ ...votosActuales, [cancionId]: votosActuales[cancionId] - 1 });
    }
  }
  
}
