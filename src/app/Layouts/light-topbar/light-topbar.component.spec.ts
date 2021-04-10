import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightTopbarComponent } from './light-topbar.component';

describe('LightTopbarComponent', () => {
  let component: LightTopbarComponent;
  let fixture: ComponentFixture<LightTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightTopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
