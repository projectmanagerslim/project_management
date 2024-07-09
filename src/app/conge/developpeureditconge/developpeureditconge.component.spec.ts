import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditcongeComponent } from './developpeureditconge.component';

describe('DeveloppeureditcongeComponent', () => {
  let component: DeveloppeureditcongeComponent;
  let fixture: ComponentFixture<DeveloppeureditcongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditcongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditcongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
