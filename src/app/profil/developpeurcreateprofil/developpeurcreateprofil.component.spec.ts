import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateprofilComponent } from './developpeurcreateprofil.component';

describe('DeveloppeurcreateprofilComponent', () => {
  let component: DeveloppeurcreateprofilComponent;
  let fixture: ComponentFixture<DeveloppeurcreateprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
