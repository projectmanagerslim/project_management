import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreatecongeComponent } from './developpeurcreateconge.component';

describe('DeveloppeurcreatecongeComponent', () => {
  let component: DeveloppeurcreatecongeComponent;
  let fixture: ComponentFixture<DeveloppeurcreatecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreatecongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreatecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
