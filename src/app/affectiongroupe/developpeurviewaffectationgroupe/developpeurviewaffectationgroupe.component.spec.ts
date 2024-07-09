import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewaffectationgroupeComponent } from './developpeurviewaffectationgroupe.component';

describe('DeveloppeurviewaffectationgroupeComponent', () => {
  let component: DeveloppeurviewaffectationgroupeComponent;
  let fixture: ComponentFixture<DeveloppeurviewaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
