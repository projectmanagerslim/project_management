import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloppeureditavancementtacheComponent } from './developpeureditavancementtache.component';

describe('DeveloppeureditavancementtacheComponent', () => {
  let component: DeveloppeureditavancementtacheComponent;
  let fixture: ComponentFixture<DeveloppeureditavancementtacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloppeureditavancementtacheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloppeureditavancementtacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
