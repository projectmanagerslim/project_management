import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexaffectationgroupeComponent } from './adminindexaffectationgroupe.component';

describe('AdminindexaffectationgroupeComponent', () => {
  let component: AdminindexaffectationgroupeComponent;
  let fixture: ComponentFixture<AdminindexaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
