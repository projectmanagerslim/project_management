import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeurcreatecompetenceComponent } from './developpeurcreatecompetence.component';

describe('DeveloppeurcreatecompetenceComponent', () => {
  let component: DeveloppeurcreatecompetenceComponent;
  let fixture: ComponentFixture<DeveloppeurcreatecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeurcreatecompetenceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeurcreatecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
