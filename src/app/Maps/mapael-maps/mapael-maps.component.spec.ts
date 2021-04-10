import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaelMapsComponent } from './mapael-maps.component';

describe('MapaelMapsComponent', () => {
  let component: MapaelMapsComponent;
  let fixture: ComponentFixture<MapaelMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaelMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapaelMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
