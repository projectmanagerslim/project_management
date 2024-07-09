import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateabsenceComponent } from './developpeurcreateabsence.component';

describe('DeveloppeurcreateabsenceComponent', () => {
  let component: DeveloppeurcreateabsenceComponent;
  let fixture: ComponentFixture<DeveloppeurcreateabsenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateabsenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateabsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
