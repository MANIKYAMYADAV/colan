import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustgageChartsComponent } from './justgage-charts.component';

describe('JustgageChartsComponent', () => {
  let component: JustgageChartsComponent;
  let fixture: ComponentFixture<JustgageChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustgageChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustgageChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
