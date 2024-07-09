import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditavancementprojetComponent } from './chefdeprojeteditavancementprojet.component';

describe('ChefdeprojeteditavancementprojetComponent', () => {
  let component: ChefdeprojeteditavancementprojetComponent;
  let fixture: ComponentFixture<ChefdeprojeteditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
