import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuilljsEditorComponent } from './quilljs-editor.component';

describe('QuilljsEditorComponent', () => {
  let component: QuilljsEditorComponent;
  let fixture: ComponentFixture<QuilljsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuilljsEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuilljsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
