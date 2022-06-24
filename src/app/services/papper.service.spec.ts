import { TestBed } from '@angular/core/testing';

import { PapperService } from './papper.service';

describe('PapperService', () => {
  let service: PapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
