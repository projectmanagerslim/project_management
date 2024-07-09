import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditprofilComponent } from './developpeureditprofil.component';

describe('DeveloppeureditprofilComponent', () => {
  let component: DeveloppeureditprofilComponent;
  let fixture: ComponentFixture<DeveloppeureditprofilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditprofilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
