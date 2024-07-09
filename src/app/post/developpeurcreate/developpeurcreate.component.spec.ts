import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateComponent } from './developpeurcreate.component';

describe('DeveloppeurcreateComponent', () => {
  let component: DeveloppeurcreateComponent;
  let fixture: ComponentFixture<DeveloppeurcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
