import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditmessageComponent } from './developpeureditmessage.component';

describe('DeveloppeureditmessageComponent', () => {
  let component: DeveloppeureditmessageComponent;
  let fixture: ComponentFixture<DeveloppeureditmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditmessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
