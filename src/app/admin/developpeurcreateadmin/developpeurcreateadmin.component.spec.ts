import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateadminComponent } from './developpeurcreateadmin.component';

describe('DeveloppeurcreateadminComponent', () => {
  let component: DeveloppeurcreateadminComponent;
  let fixture: ComponentFixture<DeveloppeurcreateadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
