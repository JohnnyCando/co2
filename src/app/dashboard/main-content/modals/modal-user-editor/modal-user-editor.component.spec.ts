import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUserEditorComponent } from './modal-user-editor.component';

describe('ModalUserEditorComponent', () => {
  let component: ModalUserEditorComponent;
  let fixture: ComponentFixture<ModalUserEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUserEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalUserEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
