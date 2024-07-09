import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexmessageComponent } from './chefdeprojetindexmessage.component';

describe('ChefdeprojetindexmessageComponent', () => {
  let component: ChefdeprojetindexmessageComponent;
  let fixture: ComponentFixture<ChefdeprojetindexmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
