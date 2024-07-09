import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexprofilComponent } from './developpeurindexprofil.component';

describe('DeveloppeurindexprofilComponent', () => {
  let component: DeveloppeurindexprofilComponent;
  let fixture: ComponentFixture<DeveloppeurindexprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
