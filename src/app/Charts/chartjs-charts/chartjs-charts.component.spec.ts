import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjsChartsComponent } from './chartjs-charts.component';

describe('ChartjsChartsComponent', () => {
  let component: ChartjsChartsComponent;
  let fixture: ComponentFixture<ChartjsChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjsChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartjsChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
