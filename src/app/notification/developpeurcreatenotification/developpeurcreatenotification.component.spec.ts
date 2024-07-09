import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreatenotificationComponent } from './developpeurcreatenotification.component';

describe('DeveloppeurcreatenotificationComponent', () => {
  let component: DeveloppeurcreatenotificationComponent;
  let fixture: ComponentFixture<DeveloppeurcreatenotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreatenotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreatenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
