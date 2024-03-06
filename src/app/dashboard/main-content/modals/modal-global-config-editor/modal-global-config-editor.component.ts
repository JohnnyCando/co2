import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../../../shared/loader/loader.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GlobalConfigService } from '../../../../core/services/global-config.service';
import { AngularMaterialModule } from '../../../../shared/angular-material.module';

@Component({
  selector: 'app-modal-global-config-editor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LoaderComponent,
    HttpClientModule,
    AngularMaterialModule
  ],
  templateUrl: './modal-global-config-editor.component.html',
  styleUrl: './modal-global-config-editor.component.scss'
})
export class ModalGlobalConfigEditorComponent implements OnInit {
  public isLoading: boolean = true;
  public globalConfigForm: any;
  public configData: any;

  constructor(
    public dialogRef: MatDialogRef<ModalGlobalConfigEditorComponent>,
    private fb: FormBuilder,
    private globalConfigService: GlobalConfigService,
    private snackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.globalConfigService.getItems().subscribe((data: any) => {
      this.configData = data
      this.globalConfigForm = this.toFormGroup(this.configData[0].globals_data);
      this.isLoading = false
    }, (error: HttpErrorResponse) => {
      this.snackBar.open(error.error.message, 'Cerrar', {
        duration: 3000,
      });
      this.dialogRef.close()
    })
  }

  private toFormGroup(item?: any) {
    return this.fb.group({
      cred_price: [item?.cred_price.price || '', [Validators.required]],
      credits: [item?.credits || '', [Validators.required]],
      price_kg: [item?.price_kg.price || '', [Validators.required]],
      compensation_percentage: this.fb.group({
        min: [item?.compensation_percentage?.min || '', [Validators.required]],
        max: [item?.compensation_percentage?.max || '', [Validators.required]],
        default: [item?.compensation_percentage?.default || '', [Validators.required]]
      }),
    });
  }

  public submitData() {
    let formData = this.globalConfigForm.value

    if (this.globalConfigForm.invalid) {
      return;
    }

    const modelDataCopy = {
      globals_data: {
        price_kg:{
          kg: 1,
          price: formData.price_kg
        },
        cred_price:{
            price: formData.cred_price
        },
        credits: formData.credits,
        compensation_percentage: {
            min: formData.compensation_percentage.min,
            max: formData.compensation_percentage.max,
            default: formData.compensation_percentage.default
        }
      }
    }

    this.isLoading = true
    this.globalConfigService.updateItem({
      id: this.configData[0].id,
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
      this.snackBar.open(error.error.message, 'Cerrar', {
        duration: 3000,
      });
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.globalConfigForm.controls;
  }

}
