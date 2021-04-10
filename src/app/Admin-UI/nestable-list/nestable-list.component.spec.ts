import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestableListComponent } from './nestable-list.component';

describe('NestableListComponent', () => {
  let component: NestableListComponent;
  let fixture: ComponentFixture<NestableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
