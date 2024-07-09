import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditnotificationComponent } from './chefdeprojeteditnotification.component';

describe('ChefdeprojeteditnotificationComponent', () => {
  let component: ChefdeprojeteditnotificationComponent;
  let fixture: ComponentFixture<ChefdeprojeteditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
