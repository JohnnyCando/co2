import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RecoveryCodePasswordService } from '../../core/services/recovery-code-password.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (!password || !confirmPassword || !password.value || !confirmPassword.value) {
      return null;
    }
    return password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
  };
}

@Component({
  selector: 'app-create-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AngularMaterialModule, LoaderComponent],
  templateUrl: './create-password.component.html',
  styleUrl: './create-password.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CreatePasswordComponent {
  public createPasswordForm!: FormGroup;
  public hidePassword: boolean = true;
  public hideConfirmPassword: boolean = true;
  private recoverInfo!: {email: string; code: string} | null
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private passwordRecoveryService: RecoveryCodePasswordService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.createPasswordForm = this.toFormGroup()
    this.recoverInfo = this.passwordRecoveryService.recoverInfo
    console.log(this.recoverInfo)
  }

  public toFormGroup() {
    return this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: confirmPasswordValidator() })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.createPasswordForm.controls;
  }

  public submit () {

    if (this.createPasswordForm.invalid) {
      return;
    }

    const modelDataCopy: any = {
      email: this.recoverInfo?.email,
      password: this.createPasswordForm.get('password')?.value
    }
    this.isLoading = true
    this.passwordRecoveryService.resetPassword(modelDataCopy, this.recoverInfo?.code).subscribe(
      () => {
        this.isLoading = false
        this.passwordRecoveryService.recoverInfo = null;
        this.snackBar.open('Contraseña cambiada correctamente', 'Cerrar', {
          duration: 3000,
        });
        this.router.navigate(['/authenticate'])
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false
        this.snackBar.open('Se ha producido un error', 'Cerrar', {
          duration: 3000,
        });
        console.error(error)
      }
    )
  }
}
