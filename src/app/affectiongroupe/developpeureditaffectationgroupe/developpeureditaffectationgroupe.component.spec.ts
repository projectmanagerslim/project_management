import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditaffectationgroupeComponent } from './developpeureditaffectationgroupe.component';

describe('DeveloppeureditaffectationgroupeComponent', () => {
  let component: DeveloppeureditaffectationgroupeComponent;
  let fixture: ComponentFixture<DeveloppeureditaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
