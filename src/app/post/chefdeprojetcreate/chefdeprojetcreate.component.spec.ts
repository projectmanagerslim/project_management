import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateComponent } from './chefdeprojetcreate.component';

describe('ChefdeprojetcreateComponent', () => {
  let component: ChefdeprojetcreateComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
