import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexComponent } from './developpeurindex.component';

describe('DeveloppeurindexComponent', () => {
  let component: DeveloppeurindexComponent;
  let fixture: ComponentFixture<DeveloppeurindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
