import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLegalAnnouncementsEditorComponent } from './modal-legal-announcements-editor.component';

describe('ModalLegalAnnouncementsEditorComponent', () => {
  let component: ModalLegalAnnouncementsEditorComponent;
  let fixture: ComponentFixture<ModalLegalAnnouncementsEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalLegalAnnouncementsEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalLegalAnnouncementsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
