import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexadminComponent } from './developpeurindexadmin.component';

describe('DeveloppeurindexadminComponent', () => {
  let component: DeveloppeurindexadminComponent;
  let fixture: ComponentFixture<DeveloppeurindexadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
