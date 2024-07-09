import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditaffectationgroupeComponent } from './chefdeprojeteditaffectationgroupe.component';

describe('ChefdeprojeteditaffectationgroupeComponent', () => {
  let component: ChefdeprojeteditaffectationgroupeComponent;
  let fixture: ComponentFixture<ChefdeprojeteditaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
