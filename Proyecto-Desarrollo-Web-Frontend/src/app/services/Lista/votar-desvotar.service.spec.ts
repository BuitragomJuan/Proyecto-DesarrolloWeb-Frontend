import { TestBed } from '@angular/core/testing';

import { VotarDesvotarService } from './votar-desvotar.service';

describe('VotarDesvotarService', () => {
  let service: VotarDesvotarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotarDesvotarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
