import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditadminComponent } from './developpeureditadmin.component';

describe('DeveloppeureditadminComponent', () => {
  let component: DeveloppeureditadminComponent;
  let fixture: ComponentFixture<DeveloppeureditadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
