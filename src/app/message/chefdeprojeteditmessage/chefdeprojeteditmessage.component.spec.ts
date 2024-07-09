import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditmessageComponent } from './chefdeprojeteditmessage.component';

describe('ChefdeprojeteditmessageComponent', () => {
  let component: ChefdeprojeteditmessageComponent;
  let fixture: ComponentFixture<ChefdeprojeteditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
