import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexprojetComponent } from './developpeurindexprojet.component';

describe('DeveloppeurindexprojetComponent', () => {
  let component: DeveloppeurindexprojetComponent;
  let fixture: ComponentFixture<DeveloppeurindexprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
