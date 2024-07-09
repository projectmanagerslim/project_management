import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewComponent } from './chefdeprojetview.component';

describe('ChefdeprojetviewComponent', () => {
  let component: ChefdeprojetviewComponent;
  let fixture: ComponentFixture<ChefdeprojetviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
