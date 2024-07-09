import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewmessageComponent } from './chefdeprojetviewmessage.component';

describe('ChefdeprojetviewmessageComponent', () => {
  let component: ChefdeprojetviewmessageComponent;
  let fixture: ComponentFixture<ChefdeprojetviewmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
