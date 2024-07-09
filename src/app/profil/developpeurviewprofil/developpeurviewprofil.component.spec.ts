import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewprofilComponent } from './developpeurviewprofil.component';

describe('DeveloppeurviewprofilComponent', () => {
  let component: DeveloppeurviewprofilComponent;
  let fixture: ComponentFixture<DeveloppeurviewprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
