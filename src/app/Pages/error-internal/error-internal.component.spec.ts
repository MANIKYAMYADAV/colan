import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInternalComponent } from './error-internal.component';

describe('ErrorInternalComponent', () => {
  let component: ErrorInternalComponent;
  let fixture: ComponentFixture<ErrorInternalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInternalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorInternalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
