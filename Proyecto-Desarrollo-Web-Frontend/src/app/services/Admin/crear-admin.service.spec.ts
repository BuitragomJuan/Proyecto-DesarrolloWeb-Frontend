import { TestBed } from '@angular/core/testing';

import { CrearAdminService } from './crear-admin.service';

describe('CrearAdminService', () => {
  let service: CrearAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
