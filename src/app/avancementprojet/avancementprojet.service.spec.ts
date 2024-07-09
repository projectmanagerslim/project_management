import { TestBed } from '@angular/core/testing';

import { AvancementprojetService } from './avancementprojet.service';

describe('AvancementprojetService', () => {
  let service: AvancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
