import { TestBed } from '@angular/core/testing';

import { AffectiongroupeService } from './affectiongroupe.service';

describe('AffectiongroupeService', () => {
  let service: AffectiongroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffectiongroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});




