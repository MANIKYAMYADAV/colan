import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTablesComponent } from './responsive-tables.component';

describe('ResponsiveTablesComponent', () => {
  let component: ResponsiveTablesComponent;
  let fixture: ComponentFixture<ResponsiveTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
