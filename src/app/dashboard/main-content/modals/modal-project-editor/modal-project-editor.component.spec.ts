import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProjectEditorComponent } from './modal-project-editor.component';

describe('ModalProjectEditorComponent', () => {
  let component: ModalProjectEditorComponent;
  let fixture: ComponentFixture<ModalProjectEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalProjectEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalProjectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
