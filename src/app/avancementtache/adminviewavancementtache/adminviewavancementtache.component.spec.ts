import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewavancementtacheComponent } from './adminviewavancementtache.component';

describe('AdminviewavancementtacheComponent', () => {
  let component: AdminviewavancementtacheComponent;
  let fixture: ComponentFixture<AdminviewavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
