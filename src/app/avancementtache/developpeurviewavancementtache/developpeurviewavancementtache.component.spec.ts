import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewavancementtacheComponent } from './developpeurviewavancementtache.component';

describe('DeveloppeurviewavancementtacheComponent', () => {
  let component: DeveloppeurviewavancementtacheComponent;
  let fixture: ComponentFixture<DeveloppeurviewavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
