import { TestBed } from '@angular/core/testing';

import { VerListasService } from './ver-listas.service';

describe('VerListasService', () => {
  let service: VerListasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerListasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
