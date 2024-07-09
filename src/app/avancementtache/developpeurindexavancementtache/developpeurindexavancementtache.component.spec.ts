import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexavancementtacheComponent } from './developpeurindexavancementtache.component';

describe('DeveloppeurindexavancementtacheComponent', () => {
  let component: DeveloppeurindexavancementtacheComponent;
  let fixture: ComponentFixture<DeveloppeurindexavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
