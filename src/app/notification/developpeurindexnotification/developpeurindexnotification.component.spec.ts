import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexnotificationComponent } from './developpeurindexnotification.component';

describe('DeveloppeurindexnotificationComponent', () => {
  let component: DeveloppeurindexnotificationComponent;
  let fixture: ComponentFixture<DeveloppeurindexnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
