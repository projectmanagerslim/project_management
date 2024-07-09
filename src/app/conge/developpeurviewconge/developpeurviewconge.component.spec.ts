import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewcongeComponent } from './developpeurviewconge.component';

describe('DeveloppeurviewcongeComponent', () => {
  let component: DeveloppeurviewcongeComponent;
  let fixture: ComponentFixture<DeveloppeurviewcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewcongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
