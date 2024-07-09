import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexavancementtacheComponent } from './adminindexavancementtache.component';

describe('AdminindexavancementtacheComponent', () => {
  let component: AdminindexavancementtacheComponent;
  let fixture: ComponentFixture<AdminindexavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
