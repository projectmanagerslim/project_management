import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditgroupeComponent } from './developpeureditgroupe.component';

describe('DeveloppeureditgroupeComponent', () => {
  let component: DeveloppeureditgroupeComponent;
  let fixture: ComponentFixture<DeveloppeureditgroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditgroupeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditgroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
