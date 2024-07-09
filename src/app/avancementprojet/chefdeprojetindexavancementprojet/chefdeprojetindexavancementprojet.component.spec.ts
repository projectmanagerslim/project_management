import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexavancementprojetComponent } from './chefdeprojetindexavancementprojet.component';

describe('ChefdeprojetindexavancementprojetComponent', () => {
  let component: ChefdeprojetindexavancementprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetindexavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
