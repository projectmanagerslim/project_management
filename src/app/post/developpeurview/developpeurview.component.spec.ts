import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewComponent } from './developpeurview.component';

describe('DeveloppeurviewComponent', () => {
  let component: DeveloppeurviewComponent;
  let fixture: ComponentFixture<DeveloppeurviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
