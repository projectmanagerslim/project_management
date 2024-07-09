import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetviewnotificationComponent } from './chefdeprojetviewnotification.component';

describe('ChefdeprojetviewnotificationComponent', () => {
  let component: ChefdeprojetviewnotificationComponent;
  let fixture: ComponentFixture<ChefdeprojetviewnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetviewnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetviewnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
