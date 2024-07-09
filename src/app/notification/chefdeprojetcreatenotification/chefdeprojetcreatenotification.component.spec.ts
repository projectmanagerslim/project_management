import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreatenotificationComponent } from './chefdeprojetcreatenotification.component';

describe('ChefdeprojetcreatenotificationComponent', () => {
  let component: ChefdeprojetcreatenotificationComponent;
  let fixture: ComponentFixture<ChefdeprojetcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreatenotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
