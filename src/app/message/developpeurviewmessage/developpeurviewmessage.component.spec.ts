import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewmessageComponent } from './developpeurviewmessage.component';

describe('DeveloppeurviewmessageComponent', () => {
  let component: DeveloppeurviewmessageComponent;
  let fixture: ComponentFixture<DeveloppeurviewmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
