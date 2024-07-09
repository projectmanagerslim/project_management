import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewprojetComponent } from './developpeurviewprojet.component';

describe('DeveloppeurviewprojetComponent', () => {
  let component: DeveloppeurviewprojetComponent;
  let fixture: ComponentFixture<DeveloppeurviewprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
