import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditabsenceComponent } from './developpeureditabsence.component';

describe('DeveloppeureditabsenceComponent', () => {
  let component: DeveloppeureditabsenceComponent;
  let fixture: ComponentFixture<DeveloppeureditabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditabsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
