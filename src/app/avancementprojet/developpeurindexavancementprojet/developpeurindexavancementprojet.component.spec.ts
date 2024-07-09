import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindexavancementprojetComponent } from './developpeurindexavancementprojet.component';

describe('DeveloppeurindexavancementprojetComponent', () => {
  let component: DeveloppeurindexavancementprojetComponent;
  let fixture: ComponentFixture<DeveloppeurindexavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindexavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindexavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
