import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { MapComponent } from '../../../../shared/map/map.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Recomendation } from '../../../../core/models/recomendation';
import { RecomendationService } from '../../../../core/services/recomendation.service';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';
import { of, switchMap } from 'rxjs';

export interface ModalDataRecomendation {
  modelData?: Recomendation;
  isEdit?: boolean
}

@Component({
  selector: 'app-modal-recomendation-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MapComponent,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './modal-recomendation-editor.component.html',
  styleUrl: './modal-recomendation-editor.component.scss'
})
export class ModalRecomendationEditorComponent {
  public modelDataRecomendation: Recomendation | any;
  public recomendationForm!: FormGroup;
  public selectedFile!: File | null;
  public previewUrl!: string | ArrayBuffer | null;
  public langSelected!: string;
  public recomendationIdName!: string;
  public recomendationExists: boolean = false;
  public errorMessage!: string;
  public isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalRecomendationEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: ModalDataRecomendation,
    private recomendationService: RecomendationService,
    private snackBar: MatSnackBar,
  ) {
    this.modelDataRecomendation = this.dialogData.modelData
  }

  ngOnInit(): void {
    this.recomendationForm = this.toFormGroup(this.modelDataRecomendation);
    console.log(this.modelDataRecomendation.background_image)
    this.previewUrl = this.modelDataRecomendation.background_image
  }

  private toFormGroup(item?: Recomendation) {
    return this.fb.group({
      identify_lang_recommended_id: [item?.identify_lang_recommended_id || '', [Validators.required]],
      lang: [item?.lang || '', [Validators.required]],
      name: [item?.name || '', [Validators.required]],
      description: [item?.description || '', [Validators.required]],
      impact: this.fb.group({
        value: [item?.impact?.value || '', [Validators.required]],
        type: [item?.impact?.type || '', [Validators.required]]
      }),
    });
  }

  public submitData() {
    let formData = this.recomendationForm.value

    if (this.recomendationForm.invalid) {
      return;
    }

    const modelDataCopy: Recomendation = {
      identify_lang_recommended_id: formData.identify_lang_recommended_id.trim(),
      lang: formData.lang,
      name: formData.name,
      description: formData.description,
      impact: {
        value: formData.impact.value,
        type: formData.impact.type
      },
    }

    if (this.selectedFile) {
      modelDataCopy.typeImage = this.selectedFile.type.split('/')[1]
    }

    const imageFormData = new FormData();
    if(this.selectedFile) {
      imageFormData.append('file', this.selectedFile)
    }

    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.recomendationService.saveItem(modelDataCopy).pipe(
        switchMap((data: any) => {
          if(data.urlPostImage) {
            let formImage = {
              urlPostImage: data.urlPostImage,
              formBody: imageFormData
            }
            return this.recomendationService.saveImage(formImage)
          } else {
            return of(data)
          }
        }),
        switchMap((data: any) => {
          console.log(data)
          return this.recomendationService.updateItem(({
            id: data.id,
            data: data
          }))
        }),
      ).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento creado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.recomendationExists = true
      })
    } else {
      this.recomendationService.updateItem({
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
        this.recomendationExists = true
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.recomendationForm.controls;
  }

  public onFileSelected(event: any) {
    const files = event.target.files as FileList;
    this.selectedFile = <File>files[0];

    if (!this.selectedFile) {
      console.error('No se ha seleccionado ningún archivo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  public onRemoveImage(input: HTMLInputElement): void {
    this.selectedFile = null;
    this.previewUrl = null;
    input.value = '';
  }

  public checkItemExists(event: any) {
    if(event.target) {
      this.recomendationIdName = (event.target as HTMLInputElement).value;
    } else {
      this.langSelected = event.value
    }
    if(this.recomendationIdName && this.langSelected) {
      this.recomendationService.checkLanguages({identifyCode: this.recomendationIdName, lang: this.langSelected}).subscribe(
        data => {
          if(data === 1) {
            this.recomendationForm.controls['identify_lang_recommended_id'].setErrors({ 'alreadyExists': true });
            this.recomendationForm.controls['lang'].setErrors({ 'alreadyExists': true });
            this.errorMessage = 'La recomendación ya existe en este idioma'
            this.recomendationExists = true
          } else {
            this.recomendationForm.controls['identify_lang_recommended_id'].setErrors(null);
            this.recomendationForm.controls['lang'].setErrors(null);
            this.recomendationExists = false
          }
        },
        (error: HttpErrorResponse) => {
          this.recomendationForm.controls['identify_lang_recommended_id'].setErrors(null);
          this.recomendationForm.controls['lang'].setErrors(null);
          this.recomendationExists = false
        }
      )
    }
  }
}
