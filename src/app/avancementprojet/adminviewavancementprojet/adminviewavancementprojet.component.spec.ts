import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewavancementprojetComponent } from './adminviewavancementprojet.component';

describe('AdminviewavancementprojetComponent', () => {
  let component: AdminviewavancementprojetComponent;
  let fixture: ComponentFixture<AdminviewavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
