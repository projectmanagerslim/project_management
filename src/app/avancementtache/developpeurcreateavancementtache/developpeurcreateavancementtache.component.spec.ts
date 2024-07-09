import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateavancementtacheComponent } from './developpeurcreateavancementtache.component';

describe('DeveloppeurcreateavancementtacheComponent', () => {
  let component: DeveloppeurcreateavancementtacheComponent;
  let fixture: ComponentFixture<DeveloppeurcreateavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
