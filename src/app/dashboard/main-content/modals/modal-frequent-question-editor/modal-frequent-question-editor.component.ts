import { Component, Inject } from '@angular/core';
import { FrequentQuestion } from '../../../../core/models/frequent-question.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MapComponent } from '../../../../shared/map/map.component';
import { FrequentQuestionService } from '../../../../core/services/frequent-question.service';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

export interface ModalDataFrequentQuestion {
  modelData?: FrequentQuestion;
  isEdit?: boolean
}

@Component({
  selector: 'app-modal-frequent-question-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MapComponent,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './modal-frequent-question-editor.component.html',
  styleUrl: './modal-frequent-question-editor.component.scss'
})
export class ModalFrequentQuestionEditorComponent {
  public modelDataRecomendation: FrequentQuestion | any;
  public recomendationForm!: FormGroup;
  public selectedFile!: File | null;
  public previewUrl!: string | ArrayBuffer | null;
  public langSelected!: string;
  public frequentQuestionIdName!: string;
  public frequentQuestionExists: boolean = false;
  public errorMessage!: string;
  public isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalFrequentQuestionEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: ModalDataFrequentQuestion,
    private frequentQuestionService: FrequentQuestionService,
    private snackBar: MatSnackBar,
  ) {
    this.modelDataRecomendation = this.dialogData.modelData
  }

  ngOnInit(): void {
    this.recomendationForm = this.toFormGroup(this.modelDataRecomendation);
  }

  private toFormGroup(item?: FrequentQuestion) {
    return this.fb.group({
      identify_lang_frequently_question_id: [item?.identify_lang_frequently_question_id || '', [Validators.required]],
      lang: [item?.lang || '', [Validators.required]],
      title: [item?.title || '', [Validators.required]],
      answer: [item?.answer || '', [Validators.required]],
      order_number: [item?.order_number || '', [Validators.required]]
    });
  }

  public submitData() {
    let formData = this.recomendationForm.value

    if (this.recomendationForm.invalid) {
      return;
    }
    const modelDataCopy: FrequentQuestion = {
      identify_lang_frequently_question_id: formData.identify_lang_frequently_question_id,
      lang: formData.lang,
      title: formData.title,
      answer: formData.answer,
      order_number: formData.order_number
    }
    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.frequentQuestionService.saveItem(modelDataCopy).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento creado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.frequentQuestionExists = true
      })
    } else {
      this.frequentQuestionService.updateItem({
        id: this.modelDataRecomendation.id,
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
        this.frequentQuestionExists = true
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.recomendationForm.controls;
  }

  public checkItemExists(event: any) {
    if(event.target) {
      this.frequentQuestionIdName = (event.target as HTMLInputElement).value;
    } else {
      this.langSelected = event.value
    }
    if(this.frequentQuestionIdName && this.langSelected) {
      this.frequentQuestionService.checkLanguages({identifyCode: this.frequentQuestionIdName, lang: this.langSelected}).subscribe(
        data => {
          if(data === 1) {
            this.recomendationForm.controls['identify_lang_frequently_question_id'].setErrors({ 'alreadyExists': true });
            this.recomendationForm.controls['lang'].setErrors({ 'alreadyExists': true });
            this.errorMessage = 'La pregunta ya existe en este idioma'
            this.frequentQuestionExists = true
          } else {
            this.recomendationForm.controls['identify_lang_frequently_question_id'].setErrors(null);
            this.recomendationForm.controls['lang'].setErrors(null);
            this.frequentQuestionExists = false
          }
        },
        (error: HttpErrorResponse) => {
          this.recomendationForm.controls['identify_lang_frequently_question_id'].setErrors(null);
          this.recomendationForm.controls['lang'].setErrors(null);
          this.frequentQuestionExists = false
        }
      )
    }
  }
}
