import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojetcreateavancementprojetComponent } from './chefdeprojetcreateavancementprojet.component';

describe('ChefdeprojetcreateavancementprojetComponent', () => {
  let component: ChefdeprojetcreateavancementprojetComponent;
  let fixture: ComponentFixture<ChefdeprojetcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojetcreateavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojetcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
