import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFrequentQuestionEditorComponent } from './modal-frequent-question-editor.component';

describe('ModalFrequentQuestionEditorComponent', () => {
  let component: ModalFrequentQuestionEditorComponent;
  let fixture: ComponentFixture<ModalFrequentQuestionEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalFrequentQuestionEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalFrequentQuestionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
