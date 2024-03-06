import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from '../../../../shared/map/map.component';
import { User } from '../../../../core/models/user.model';
import { UserService } from '../../../../core/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

export interface ModalDataUser {
  modelData?: User;
  isEdit?: boolean
}

@Component({
  selector: 'app-modal-user-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    MapComponent,
    LoaderComponent,
    AngularMaterialModule
  ],
  templateUrl: './modal-user-editor.component.html',
  styleUrl: './modal-user-editor.component.scss'
})
export class ModalUserEditorComponent {
  public modelDataUser: User | any;
  public userForm!: FormGroup;
  public selectedFile!: File | null;
  public previewUrl!: string | ArrayBuffer | null;
  public isLoading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalUserEditorComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: ModalDataUser,
    private userService: UserService,
    private snackBar: MatSnackBar,
  ) {
    this.modelDataUser = this.dialogData.modelData
  }

  ngOnInit(): void {
    this.userForm = this.toFormGroup(this.modelDataUser);
  }

  private toFormGroup(item: User) {
    return this.fb.group({
      name: [item?.name, [Validators.required]],
      email: [item?.email, [Validators.required]],
    })
  }

  public submitData() {
    if (this.userForm.invalid) {
      return;
    }

    const modelDataCopy: User = {
      name: this.userForm.get('name')?.value,
      email: this.userForm.get('email')?.value,
      role: 'ADMIN'
    }
    this.isLoading = true
    if(!this.dialogData.isEdit) {
      this.userService.saveItem(modelDataCopy).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento creado con éxito', 'Cerrar', {
          duration: 3000,
        });
      })
    } else {
      this.userService.updateItem({
        id: this.modelDataUser.id,
        data: modelDataCopy
      }).subscribe(() => {
        this.isLoading = false
        this.dialogRef.close();
        this.snackBar.open('Elemento editado con éxito', 'Cerrar', {
          duration: 3000,
        });
      })
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userForm.controls;
  }
}
