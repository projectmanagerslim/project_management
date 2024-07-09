import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexcongeComponent } from './developpeurindexconge.component';

describe('DeveloppeurindexcongeComponent', () => {
  let component: DeveloppeurindexcongeComponent;
  let fixture: ComponentFixture<DeveloppeurindexcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexcongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
