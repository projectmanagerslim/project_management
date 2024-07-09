import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeuredittacheComponent } from './developpeuredittache.component';

describe('DeveloppeuredittacheComponent', () => {
  let component: DeveloppeuredittacheComponent;
  let fixture: ComponentFixture<DeveloppeuredittacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeuredittacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeuredittacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
