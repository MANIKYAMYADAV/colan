import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsgridTablesComponent } from './jsgrid-tables.component';

describe('JsgridTablesComponent', () => {
  let component: JsgridTablesComponent;
  let fixture: ComponentFixture<JsgridTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsgridTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsgridTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
