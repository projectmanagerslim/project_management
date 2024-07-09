import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexaffectationgroupeComponent } from './developpeurindexaffectationgroupe.component';

describe('DeveloppeurindexaffectationgroupeComponent', () => {
  let component: DeveloppeurindexaffectationgroupeComponent;
  let fixture: ComponentFixture<DeveloppeurindexaffectationgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexaffectationgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexaffectationgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
