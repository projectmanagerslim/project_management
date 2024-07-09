import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewgroupeComponent } from './developpeurviewgroupe.component';

describe('DeveloppeurviewgroupeComponent', () => {
  let component: DeveloppeurviewgroupeComponent;
  let fixture: ComponentFixture<DeveloppeurviewgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
