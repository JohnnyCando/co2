import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTermsConditionsEditorComponent } from './modal-terms-conditions-editor.component';

describe('ModalTermsConditionsEditorComponent', () => {
  let component: ModalTermsConditionsEditorComponent;
  let fixture: ComponentFixture<ModalTermsConditionsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalTermsConditionsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalTermsConditionsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
