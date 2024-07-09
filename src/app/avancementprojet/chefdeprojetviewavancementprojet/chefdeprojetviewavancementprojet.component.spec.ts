import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewavancementprojetComponent } from './chefdeprojetviewavancementprojet.component';

describe('ChefdeprojetviewavancementprojetComponent', () => {
  let component: ChefdeprojetviewavancementprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetviewavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
