import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdeprojeteditComponent } from './chefdeprojetedit.component';

describe('ChefdeprojeteditComponent', () => {
  let component: ChefdeprojeteditComponent;
  let fixture: ComponentFixture<ChefdeprojeteditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefdeprojeteditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChefdeprojeteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
