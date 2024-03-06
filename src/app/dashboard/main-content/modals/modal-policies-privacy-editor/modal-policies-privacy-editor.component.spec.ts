import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPoliciesPrivacyEditorComponent } from './modal-policies-privacy-editor.component';

describe('ModalPoliciesPrivacyEditorComponent', () => {
  let component: ModalPoliciesPrivacyEditorComponent;
  let fixture: ComponentFixture<ModalPoliciesPrivacyEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalPoliciesPrivacyEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalPoliciesPrivacyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
