import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { TextView } from '../../../../core/models/text.model';
import { TextService } from '../../../../core/services/text.service';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { UtilsService } from '../../../../core/services/utils.service';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

export interface ModalDataText {
  modelData?: TextView;
  isEdit?: boolean
}

@Component({
  selector: 'app-modal-legal-announcements-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './modal-legal-announcements-editor.component.html',
  styleUrl: './modal-legal-announcements-editor.component.scss'
})
export class ModalLegalAnnouncementsEditorComponent {
  public modelDataText: TextView | any;
  public legalAnnouncmentForm!: FormGroup;
  public langSelected!: string;
  public legalAnnouncmentIdName!: string;
  public legalAnnouncmentExists: boolean = false;
  public errorMessage!: string;
  public isLoading: boolean = false;
  public editorConfig!: AngularEditorConfig;

  constructor(
    public dialogRef: MatDialogRef<ModalLegalAnnouncementsEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: ModalDataText,
    private textService: TextService,
    private snackBar: MatSnackBar,
    private utilsService: UtilsService
  ) {
    this.modelDataText = this.dialogData.modelData
  }

  ngOnInit(): void {
    this.legalAnnouncmentForm = this.toFormGroup(this.modelDataText);
    this.editorConfig = this.utilsService.getEditorConfig
  }

  private toFormGroup(item?: TextView) {
    return this.fb.group({
      identify_lang_text_view_id: [item?.identify_lang_text_view_id || '', [Validators.required]],
      lang: [item?.lang || '', [Validators.required]],
      name: [item?.name || '', [Validators.required]],
      description_text: [item?.description_text || '', [Validators.required]],
    });
  }

  public submitData() {
    let formData = this.legalAnnouncmentForm.value

    if (this.legalAnnouncmentForm.invalid) {
      return;
    }

    const modelDataCopy: TextView = {
      identify_lang_text_view_id: formData.identify_lang_text_view_id,
      lang: formData.lang,
      name: formData.name,
      description_text: formData.description_text,
      type_string: 'announcements_acciona'
    }
    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.textService.saveItem(modelDataCopy).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento creado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.legalAnnouncmentExists = true
      })
    } else {
      this.textService.updateItem({
        id: this.modelDataText.id,
        data: modelDataCopy
      }).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento editado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.legalAnnouncmentExists = true
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.legalAnnouncmentForm.controls;
  }

  public checkItemExists(event: any) {
    if(event.target) {
      this.legalAnnouncmentIdName = (event.target as HTMLInputElement).value;
    } else {
      this.langSelected = event.value
    }
    if(this.legalAnnouncmentIdName && this.langSelected) {
      this.textService.checkLanguages({identifyCode: this.legalAnnouncmentIdName, lang: this.langSelected}).subscribe(
        data => {
          if(data === 1) {
            this.legalAnnouncmentForm.controls['identify_lang_text_view_id'].setErrors({ 'alreadyExists': true });
            this.legalAnnouncmentForm.controls['lang'].setErrors({ 'alreadyExists': true });
            this.errorMessage = 'La recomendación ya existe en este idioma'
            this.legalAnnouncmentExists = true
          } else {
            this.legalAnnouncmentForm.controls['identify_lang_text_view_id'].setErrors(null);
            this.legalAnnouncmentForm.controls['lang'].setErrors(null);
            this.legalAnnouncmentExists = false
          }
        },
        (error: HttpErrorResponse) => {
          this.legalAnnouncmentForm.controls['identify_lang_text_view_id'].setErrors(null);
          this.legalAnnouncmentForm.controls['lang'].setErrors(null);
          this.legalAnnouncmentExists = false
        }
      )
    }
  }
}
