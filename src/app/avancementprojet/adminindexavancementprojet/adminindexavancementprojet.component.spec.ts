import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminindexavancementprojetComponent } from './adminindexavancementprojet.component';

describe('AdminindexavancementprojetComponent', () => {
  let component: AdminindexavancementprojetComponent;
  let fixture: ComponentFixture<AdminindexavancementprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminindexavancementprojetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminindexavancementprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
