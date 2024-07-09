import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateavancementtacheComponent } from './chefdeprojetcreateavancementtache.component';

describe('ChefdeprojetcreateavancementtacheComponent', () => {
  let component: ChefdeprojetcreateavancementtacheComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
