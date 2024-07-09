import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewnotificationComponent } from './developpeurviewnotification.component';

describe('DeveloppeurviewnotificationComponent', () => {
  let component: DeveloppeurviewnotificationComponent;
  let fixture: ComponentFixture<DeveloppeurviewnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
