import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSidebarComponent } from './dark-sidebar.component';

describe('DarkSidebarComponent', () => {
  let component: DarkSidebarComponent;
  let fixture: ComponentFixture<DarkSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
