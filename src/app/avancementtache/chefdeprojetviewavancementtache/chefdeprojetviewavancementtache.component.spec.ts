import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewavancementtacheComponent } from './chefdeprojetviewavancementtache.component';

describe('ChefdeprojetviewavancementtacheComponent', () => {
  let component: ChefdeprojetviewavancementtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetviewavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
