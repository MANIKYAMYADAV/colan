import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklinesChartsComponent } from './sparklines-charts.component';

describe('SparklinesChartsComponent', () => {
  let component: SparklinesChartsComponent;
  let fixture: ComponentFixture<SparklinesChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparklinesChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklinesChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
