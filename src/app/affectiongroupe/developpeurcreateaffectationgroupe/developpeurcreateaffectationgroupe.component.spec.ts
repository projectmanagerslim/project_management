import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateaffectationgroupeComponent } from './developpeurcreateaffectationgroupe.component';

describe('DeveloppeurcreateaffectationgroupeComponent', () => {
  let component: DeveloppeurcreateaffectationgroupeComponent;
  let fixture: ComponentFixture<DeveloppeurcreateaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
