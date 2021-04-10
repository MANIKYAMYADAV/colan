import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryKnobChartsComponent } from './jquery-knob-charts.component';

describe('JqueryKnobChartsComponent', () => {
  let component: JqueryKnobChartsComponent;
  let fixture: ComponentFixture<JqueryKnobChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryKnobChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryKnobChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
