import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreategroupeComponent } from './developpeurcreategroupe.component';

describe('DeveloppeurcreategroupeComponent', () => {
  let component: DeveloppeurcreategroupeComponent;
  let fixture: ComponentFixture<DeveloppeurcreategroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreategroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreategroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
