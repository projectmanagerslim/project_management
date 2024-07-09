import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatemessageComponent } from './chefdeprojetcreatemessage.component';

describe('ChefdeprojetcreatemessageComponent', () => {
  let component: ChefdeprojetcreatemessageComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatemessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
