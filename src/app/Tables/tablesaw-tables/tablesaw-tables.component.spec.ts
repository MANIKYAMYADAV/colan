import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesawTablesComponent } from './tablesaw-tables.component';

describe('TablesawTablesComponent', () => {
  let component: TablesawTablesComponent;
  let fixture: ComponentFixture<TablesawTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesawTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesawTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
