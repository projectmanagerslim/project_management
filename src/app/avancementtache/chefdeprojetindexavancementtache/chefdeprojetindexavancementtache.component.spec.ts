import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexavancementtacheComponent } from './chefdeprojetindexavancementtache.component';

describe('ChefdeprojetindexavancementtacheComponent', () => {
  let component: ChefdeprojetindexavancementtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetindexavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
