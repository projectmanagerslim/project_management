import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexuserComponent } from './developpeurindexuser.component';

describe('DeveloppeurindexuserComponent', () => {
  let component: DeveloppeurindexuserComponent;
  let fixture: ComponentFixture<DeveloppeurindexuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
