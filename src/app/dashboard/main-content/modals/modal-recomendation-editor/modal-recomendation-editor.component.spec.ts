import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecomendationEditorComponent } from './modal-recomendation-editor.component';

describe('ModalRecomendationEditorComponent', () => {
  let component: ModalRecomendationEditorComponent;
  let fixture: ComponentFixture<ModalRecomendationEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRecomendationEditorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRecomendationEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
