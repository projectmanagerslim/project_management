import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreatemessageComponent } from './developpeurcreatemessage.component';

describe('DeveloppeurcreatemessageComponent', () => {
  let component: DeveloppeurcreatemessageComponent;
  let fixture: ComponentFixture<DeveloppeurcreatemessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreatemessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
