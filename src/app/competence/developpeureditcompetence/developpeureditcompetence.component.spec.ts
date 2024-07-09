import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditcompetenceComponent } from './developpeureditcompetence.component';

describe('DeveloppeureditcompetenceComponent', () => {
  let component: DeveloppeureditcompetenceComponent;
  let fixture: ComponentFixture<DeveloppeureditcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditcompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
