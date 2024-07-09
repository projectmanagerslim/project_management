import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditprojetComponent } from './developpeureditprojet.component';

describe('DeveloppeureditprojetComponent', () => {
  let component: DeveloppeureditprojetComponent;
  let fixture: ComponentFixture<DeveloppeureditprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
