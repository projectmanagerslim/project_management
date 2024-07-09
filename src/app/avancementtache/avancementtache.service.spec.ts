import { TestBed } from '@angular/core/testing';

import { AvancementtacheService } from './avancementtache.service';

describe('AvancementtacheService', () => {
  let service: AvancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
