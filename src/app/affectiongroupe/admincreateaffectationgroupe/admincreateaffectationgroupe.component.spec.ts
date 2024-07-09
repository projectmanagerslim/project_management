import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincreateaffectationgroupeComponent } from './admincreateaffectationgroupe.component';

describe('AdmincreateaffectationgroupeComponent', () => {
  let component: AdmincreateaffectationgroupeComponent;
  let fixture: ComponentFixture<AdmincreateaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmincreateaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmincreateaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
