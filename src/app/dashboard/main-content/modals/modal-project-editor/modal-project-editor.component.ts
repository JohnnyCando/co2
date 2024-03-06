import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Project } from '../../../../core/models/project.model';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import { MapComponent } from '../../../../shared/map/map.component';
import { GoogleMapComponent } from '../../../../shared/google-map/google-map.component';
import { ProjectService } from '../../../../core/services/project.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { UtilsService } from '../../../../core/services/utils.service';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

export interface ModalDataProject {
  modelData?: Project;
  isEdit?: boolean
}

@Component({
  selector: 'app-modal-project-editor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
    MapComponent,
    GoogleMapComponent,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './modal-project-editor.component.html',
  styleUrl: './modal-project-editor.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ModalProjectEditorComponent implements OnInit {
  public modelDataProject: Project | any;
  public projectForm!: FormGroup;
  public selectedFile!: File | null;
  public previewUrl!: string | ArrayBuffer | null;
  public initialCoords: any;
  public langSelected!: string;
  public projectIdName!: string;
  public projectExists: boolean = false;
  public errorMessage!: string;
  public isLoading: boolean = false;
  public editorConfig!: AngularEditorConfig;
  public state!: boolean;

  constructor(
    private projectService: ProjectService,
    public dialogRef: MatDialogRef<ModalProjectEditorComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public dialogData: ModalDataProject,
    private utilsService: UtilsService
  ) {
    this.modelDataProject = this.dialogData.modelData
  }

  ngOnInit(): void {
    this.projectForm = this.toFormGroup(this.modelDataProject);
    if(this.modelDataProject) {
      this.initialCoords = {
        lat: +this.modelDataProject.location[0],
        lng: +this.modelDataProject.location[1]
      }
    }
    this.editorConfig = this.utilsService.getEditorConfig
    this.state = this.modelDataProject.is_active
    this.previewUrl = this.modelDataProject.image_background
  }

  private toFormGroup(item: Project) {
    const formArrayLocationInfo = this.fb.array([]) as FormArray;
    item?.fields_dynamics?.forEach(col => {
      formArrayLocationInfo.push(
        this.fb.group({
          label: [col.name],
          value: [col.value]
        })
      )
    })
    let latNumber: number | null = null;
    let lngNumber: number | null = null;
    if (item?.location?.length==2) {
      latNumber = item.location[0];
      lngNumber = item.location[1];
    }
    return this.fb.group({
      name: [item?.title, [Validators.required]],
      description: [item?.description_project,[Validators.required]],
      slogan: [item?.slogan, [Validators.required]],
      email: [item?.email, [Validators.required, Validators.email]],
      category: [item?.category, [Validators.required]],
      location: this.fb.group({
        lat: [latNumber, [Validators.required]],
        lng: [lngNumber, [Validators.required]]
      }),
      location_info: formArrayLocationInfo,
      identify_lang_project_id: [item?.identify_lang_project_id || '', [Validators.required]],
      lang: [item?.lang || '', [Validators.required]],
    })
  }

  public getCoordinates(coords: any) {
    console.log(coords)
    this.initialCoords = coords;
    this.projectForm.patchValue({
      location: coords
    })
  }

  get location_info() {
    return this.projectForm.get('location_info') as FormArray;
  }

  public addValueFormArray() {
    if(this.location_info.length >= 5) {
      return
    }
    this.location_info.push(this.fb.group({
      label: [null, [Validators.required, Validators.minLength(1)]],
      value: [null, [Validators.required, Validators.minLength(1)]],
    }))
  }

  public removeValueFormArray($index: number) {
    this.location_info.removeAt($index)
  }

  public submitData() {
    if (this.projectForm.invalid) {
      return;
    }
    const location_info_values = this.location_info.controls.filter(item=>item.valid).map(item => ({
      name: item.value?.label,
      value: item.value?.value
    }));

    let formData = this.projectForm.value

    const modelDataCopy: Project = {
      identify_lang_project_id: formData.identify_lang_project_id.trim(),
      lang: formData.lang,
      title: formData.name,
      description_project: formData.description,
      slogan: formData.slogan,
      email: formData.email,
      category: formData.category,
      fields_dynamics: location_info_values,
      location: [formData.location.lat, formData.location.lng],
      is_active: true
    }

    if (this.selectedFile) {
      modelDataCopy.type_image = this.selectedFile.type.split('/')[1]
    }

    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.projectService.saveItem(modelDataCopy).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento creado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.projectExists = true
      })
    } else {
      this.projectService.updateItem({
        id: this.modelDataProject.id,
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
        this.projectExists = true
      })
    }
  }

  public saveData() {
    if(this.projectForm.get('identify_lang_project_id')?.value === "" || this.projectForm.get('lang')?.value === "") {
      return
    }

    const location_info_values = this.location_info.controls.filter(item=>item.valid).map(item => ({
      name: item.value?.label,
      value: item.value?.value
    }));

    let formData = this.projectForm.value

    const modelDataCopy: Project = {
      identify_lang_project_id: formData.identify_lang_project_id.trim(),
      lang: formData.lang,
      title: formData.name,
      description_project: formData.description,
      slogan: formData.slogan,
      category: formData.category,
      email: formData.email,
      fields_dynamics: location_info_values,
      location: [formData.location.lat, formData.location.lng],
      is_active: false
    }

    if (this.selectedFile) {
      modelDataCopy.type_image = this.selectedFile.type.split('/')[1]
    }

    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.projectService.saveItem(modelDataCopy).subscribe(() => {
        this.isLoading = false
        this.snackBar.open('Elemento guardado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.projectExists = true
      })
    } else {
      this.projectService.updateItem({
        id: this.modelDataProject.id,
        data: modelDataCopy
      }).subscribe(() => {
        this.isLoading = false
        this.snackBar.open('Elemento actualizado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.errorMessage = error.message;
        this.projectExists = true
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.projectForm.controls;
  }

  public onFileSelected(event: any) {
    const files = event.target.files as FileList;
    this.selectedFile = files[0];

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
      this.projectIdName = (event.target as HTMLInputElement).value;
    } else {
      this.langSelected = event.value
    }
    if(this.projectIdName && this.langSelected) {
      this.projectService.checkLanguages({identifyCode: this.projectIdName, lang: this.langSelected}).subscribe(
        data => {
          if(data === 1) {
            this.projectForm.controls['identify_lang_project_id'].setErrors({ 'alreadyExists': true });
            this.projectForm.controls['lang'].setErrors({ 'alreadyExists': true });
            this.errorMessage = 'El proyecto ya existe en este idioma'
            this.projectExists = true
          } else {
            this.projectForm.controls['identify_lang_project_id'].setErrors(null);
            this.projectForm.controls['lang'].setErrors(null);
            this.projectExists = false
          }
        },
        (error: HttpErrorResponse) => {
          this.projectForm.controls['identify_lang_project_id'].setErrors(null);
          this.projectForm.controls['lang'].setErrors(null);
          this.projectExists = false
        }
      )
    }
  }

  public checkValiditySave(): boolean {
    if(this.projectForm.get('identify_lang_project_id')?.value === "" || this.projectForm.get('lang')?.value === "") {
      return true
    } else {
      return false
    }
  }

  public unpublish() {
    this.projectService.updateItem({
      id: this.modelDataProject.id,
      data: {is_active: false}
    }).subscribe(() => {
      this.isLoading = false
      this.state = false
      this.snackBar.open('Elemento actualizado con éxito', 'Cerrar', {
        duration: 3000,
      });
    },
    (error: HttpErrorResponse) => {
      this.isLoading = false
      this.errorMessage = error.message;
      this.projectExists = true
    })
  }
}
