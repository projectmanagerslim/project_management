import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditComponent } from './developpeuredit.component';

describe('DeveloppeureditComponent', () => {
  let component: DeveloppeureditComponent;
  let fixture: ComponentFixture<DeveloppeureditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
