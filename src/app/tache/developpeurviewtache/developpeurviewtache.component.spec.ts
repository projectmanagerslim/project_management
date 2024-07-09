import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewtacheComponent } from './developpeurviewtache.component';

describe('DeveloppeurviewtacheComponent', () => {
  let component: DeveloppeurviewtacheComponent;
  let fixture: ComponentFixture<DeveloppeurviewtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
