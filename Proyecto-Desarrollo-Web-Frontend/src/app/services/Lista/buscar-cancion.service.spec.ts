import { TestBed } from '@angular/core/testing';

import { BuscarCancionService } from './buscar-cancion.service';

describe('BuscarCancionService', () => {
  let service: BuscarCancionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarCancionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
