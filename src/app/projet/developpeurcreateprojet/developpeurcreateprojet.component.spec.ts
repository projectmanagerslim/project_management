import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateprojetComponent } from './developpeurcreateprojet.component';

describe('DeveloppeurcreateprojetComponent', () => {
  let component: DeveloppeurcreateprojetComponent;
  let fixture: ComponentFixture<DeveloppeurcreateprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
