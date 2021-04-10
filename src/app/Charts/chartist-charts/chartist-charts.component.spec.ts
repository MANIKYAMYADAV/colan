import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartistChartsComponent } from './chartist-charts.component';

describe('ChartistChartsComponent', () => {
  let component: ChartistChartsComponent;
  let fixture: ComponentFixture<ChartistChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartistChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartistChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
