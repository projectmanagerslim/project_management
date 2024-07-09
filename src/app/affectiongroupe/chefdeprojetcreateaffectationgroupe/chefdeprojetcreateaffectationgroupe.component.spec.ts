import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateaffectationgroupeComponent } from './chefdeprojetcreateaffectationgroupe.component';

describe('ChefdeprojetcreateaffectationgroupeComponent', () => {
  let component: ChefdeprojetcreateaffectationgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreateaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
