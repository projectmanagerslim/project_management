import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditavancementprojetComponent } from './developpeureditavancementprojet.component';

describe('DeveloppeureditavancementprojetComponent', () => {
  let component: DeveloppeureditavancementprojetComponent;
  let fixture: ComponentFixture<DeveloppeureditavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
