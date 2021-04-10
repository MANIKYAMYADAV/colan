import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicksawChartsComponent } from './ricksaw-charts.component';

describe('RicksawChartsComponent', () => {
  let component: RicksawChartsComponent;
  let fixture: ComponentFixture<RicksawChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicksawChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RicksawChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
