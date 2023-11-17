import { TestBed } from '@angular/core/testing';

import { IniciarAdminService } from './iniciar-admin.service';

describe('IniciarAdminService', () => {
  let service: IniciarAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IniciarAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
