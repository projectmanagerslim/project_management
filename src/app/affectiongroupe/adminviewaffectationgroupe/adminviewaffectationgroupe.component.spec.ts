import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewaffectationgroupeComponent } from './adminviewaffectationgroupe.component';

describe('AdminviewaffectationgroupeComponent', () => {
  let component: AdminviewaffectationgroupeComponent;
  let fixture: ComponentFixture<AdminviewaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
