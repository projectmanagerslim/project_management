import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewuserComponent } from './developpeurviewuser.component';

describe('DeveloppeurviewuserComponent', () => {
  let component: DeveloppeurviewuserComponent;
  let fixture: ComponentFixture<DeveloppeurviewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
