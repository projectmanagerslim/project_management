import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewabsenceComponent } from './developpeurviewabsence.component';

describe('DeveloppeurviewabsenceComponent', () => {
  let component: DeveloppeurviewabsenceComponent;
  let fixture: ComponentFixture<DeveloppeurviewabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewabsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
