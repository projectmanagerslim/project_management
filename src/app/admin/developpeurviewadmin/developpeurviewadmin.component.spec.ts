import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewadminComponent } from './developpeurviewadmin.component';

describe('DeveloppeurviewadminComponent', () => {
  let component: DeveloppeurviewadminComponent;
  let fixture: ComponentFixture<DeveloppeurviewadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
