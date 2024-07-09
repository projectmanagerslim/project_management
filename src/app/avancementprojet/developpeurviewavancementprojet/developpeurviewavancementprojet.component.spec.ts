import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurviewavancementprojetComponent } from './developpeurviewavancementprojet.component';

describe('DeveloppeurviewavancementprojetComponent', () => {
  let component: DeveloppeurviewavancementprojetComponent;
  let fixture: ComponentFixture<DeveloppeurviewavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurviewavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurviewavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
