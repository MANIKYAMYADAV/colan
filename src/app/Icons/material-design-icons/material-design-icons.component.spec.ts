import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDesignIconsComponent } from './material-design-icons.component';

describe('MaterialDesignIconsComponent', () => {
  let component: MaterialDesignIconsComponent;
  let fixture: ComponentFixture<MaterialDesignIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDesignIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDesignIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
