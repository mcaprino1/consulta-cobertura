import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageQueryComponent } from './coverage-query.component';

describe('CoverageComponent', () => {
  let component: CoverageQueryComponent;
  let fixture: ComponentFixture<CoverageQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
