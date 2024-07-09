import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexgroupeComponent } from './developpeurindexgroupe.component';

describe('DeveloppeurindexgroupeComponent', () => {
  let component: DeveloppeurindexgroupeComponent;
  let fixture: ComponentFixture<DeveloppeurindexgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
