import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditaffectationgroupeComponent } from './admineditaffectationgroupe.component';

describe('AdmineditaffectationgroupeComponent', () => {
  let component: AdmineditaffectationgroupeComponent;
  let fixture: ComponentFixture<AdmineditaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmineditaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmineditaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
