import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetindexComponent } from './chefdeprojetindex.component';

describe('ChefdeprojetindexComponent', () => {
  let component: ChefdeprojetindexComponent;
  let fixture: ComponentFixture<ChefdeprojetindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
