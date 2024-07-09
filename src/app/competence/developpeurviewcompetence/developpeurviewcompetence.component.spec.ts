import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewcompetenceComponent } from './developpeurviewcompetence.component';

describe('DeveloppeurviewcompetenceComponent', () => {
  let component: DeveloppeurviewcompetenceComponent;
  let fixture: ComponentFixture<DeveloppeurviewcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewcompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
