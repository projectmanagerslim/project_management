import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditavancementtacheComponent } from './chefdeprojeteditavancementtache.component';

describe('ChefdeprojeteditavancementtacheComponent', () => {
  let component: ChefdeprojeteditavancementtacheComponent;
  let fixture: ComponentFixture<ChefdeprojeteditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
