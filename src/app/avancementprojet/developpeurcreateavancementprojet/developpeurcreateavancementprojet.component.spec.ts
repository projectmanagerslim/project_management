import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreateavancementprojetComponent } from './developpeurcreateavancementprojet.component';

describe('DeveloppeurcreateavancementprojetComponent', () => {
  let component: DeveloppeurcreateavancementprojetComponent;
  let fixture: ComponentFixture<DeveloppeurcreateavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreateavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreateavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
