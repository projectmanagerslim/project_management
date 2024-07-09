import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateuserComponent } from './developpeurcreateuser.component';

describe('DeveloppeurcreateuserComponent', () => {
  let component: DeveloppeurcreateuserComponent;
  let fixture: ComponentFixture<DeveloppeurcreateuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
