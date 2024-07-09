import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurindextacheComponent } from './developpeurindextache.component';

describe('DeveloppeurindextacheComponent', () => {
  let component: DeveloppeurindextacheComponent;
  let fixture: ComponentFixture<DeveloppeurindextacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurindextacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurindextacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
