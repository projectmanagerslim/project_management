import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewaffectationgroupeComponent } from './chefdeprojetviewaffectationgroupe.component';

describe('ChefdeprojetviewaffectationgroupeComponent', () => {
  let component: ChefdeprojetviewaffectationgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetviewaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
