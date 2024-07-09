import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeuredituserComponent } from './developpeuredituser.component';

describe('DeveloppeuredituserComponent', () => {
  let component: DeveloppeuredituserComponent;
  let fixture: ComponentFixture<DeveloppeuredituserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeuredituserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeuredituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
