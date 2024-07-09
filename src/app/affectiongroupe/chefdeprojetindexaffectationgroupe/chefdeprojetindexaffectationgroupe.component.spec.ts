import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexaffectationgroupeComponent } from './chefdeprojetindexaffectationgroupe.component';

describe('ChefdeprojetindexaffectationgroupeComponent', () => {
  let component: ChefdeprojetindexaffectationgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojetindexaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
