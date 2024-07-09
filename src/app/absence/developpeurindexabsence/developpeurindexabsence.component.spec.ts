import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexabsenceComponent } from './developpeurindexabsence.component';

describe('DeveloppeurindexabsenceComponent', () => {
  let component: DeveloppeurindexabsenceComponent;
  let fixture: ComponentFixture<DeveloppeurindexabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexabsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
