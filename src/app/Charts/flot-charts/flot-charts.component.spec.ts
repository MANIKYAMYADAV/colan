import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotChartsComponent } from './flot-charts.component';

describe('FlotChartsComponent', () => {
  let component: FlotChartsComponent;
  let fixture: ComponentFixture<FlotChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlotChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
