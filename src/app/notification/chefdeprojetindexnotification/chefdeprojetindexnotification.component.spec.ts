import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexnotificationComponent } from './chefdeprojetindexnotification.component';

describe('ChefdeprojetindexnotificationComponent', () => {
  let component: ChefdeprojetindexnotificationComponent;
  let fixture: ComponentFixture<ChefdeprojetindexnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
