import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditnotificationComponent } from './developpeureditnotification.component';

describe('DeveloppeureditnotificationComponent', () => {
  let component: DeveloppeureditnotificationComponent;
  let fixture: ComponentFixture<DeveloppeureditnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditnotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
