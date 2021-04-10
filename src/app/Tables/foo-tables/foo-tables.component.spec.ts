import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooTablesComponent } from './foo-tables.component';

describe('FooTablesComponent', () => {
  let component: FooTablesComponent;
  let fixture: ComponentFixture<FooTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooTablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
