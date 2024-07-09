import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexcompetenceComponent } from './developpeurindexcompetence.component';

describe('DeveloppeurindexcompetenceComponent', () => {
  let component: DeveloppeurindexcompetenceComponent;
  let fixture: ComponentFixture<DeveloppeurindexcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexcompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
