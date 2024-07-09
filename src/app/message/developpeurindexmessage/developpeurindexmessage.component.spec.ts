import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexmessageComponent } from './developpeurindexmessage.component';

describe('DeveloppeurindexmessageComponent', () => {
  let component: DeveloppeurindexmessageComponent;
  let fixture: ComponentFixture<DeveloppeurindexmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
