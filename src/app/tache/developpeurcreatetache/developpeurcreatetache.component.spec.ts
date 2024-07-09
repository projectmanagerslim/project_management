import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreatetacheComponent } from './developpeurcreatetache.component';

describe('DeveloppeurcreatetacheComponent', () => {
  let component: DeveloppeurcreatetacheComponent;
  let fixture: ComponentFixture<DeveloppeurcreatetacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreatetacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreatetacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
