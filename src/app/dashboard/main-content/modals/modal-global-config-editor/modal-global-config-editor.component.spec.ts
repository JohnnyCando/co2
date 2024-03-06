import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGlobalConfigEditorComponent } from './modal-global-config-editor.component';

describe('ModalGlobalConfigEditorComponent', () => {
  let component: ModalGlobalConfigEditorComponent;
  let fixture: ComponentFixture<ModalGlobalConfigEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGlobalConfigEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalGlobalConfigEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
