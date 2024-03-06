import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { RecoveryCodePasswordService } from '../../core/services/recovery-code-password.service';
import { AngularMaterialModule } from '../../shared/angular-material.module';

export function numeroValido(): ValidatorFn {
  const numeroPattern = /^[0-9]{4}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = numeroPattern.test(control.value);
    return isValid ? null : { 'invalidNumber': { value: control.value } };
  };
}

@Component({
  selector: 'app-email-code-recover',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    LoaderComponent
  ],
  templateUrl: './email-code-recover.component.html',
  styleUrl: './email-code-recover.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class EmailCodeRecoverComponent {
  public sendEmailForm!: FormGroup;
  public codeForm!: FormGroup;
  public hide: boolean = true;
  public isLoading: boolean = false;
  public emailSent: boolean = false;
  public email!: string;

  constructor(
    private fb: FormBuilder,
    private passwordRecoveryService: RecoveryCodePasswordService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.sendEmailForm = this.toEmailFormGroup()
    this.codeForm = this.toCodeFormGroup()
  }
  
  public toEmailFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  public toCodeFormGroup() {
    return this.fb.group({
      code: ['xxxx', [Validators.required, Validators.minLength(4), numeroValido()]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.sendEmailForm.controls;
  }

  get f_code(): { [key: string]: AbstractControl } {
    return this.codeForm.controls;
  }

  public submitEmail () {
    if (this.sendEmailForm.invalid) {
      return;
    }
    const modelDataCopy = {
      email: this.sendEmailForm.get('email')?.value,
    }
    this.isLoading =  true;
    this.passwordRecoveryService.sendEmailCode(modelDataCopy).subscribe(
      () => {
        this.isLoading =  false;
        this.emailSent = true;
        this.email = modelDataCopy.email;
        this.passwordRecoveryService.recoverInfo = null;
      },
      (error) => {
        this.isLoading =  false;
        this.passwordRecoveryService.recoverInfo = null;
        this.snackBar.open(error, 'Cerrar', {
          duration: 5000,
        });
      }
    )
  }

  public submitCode() {
    if (this.codeForm.invalid) {
      return;
    }
    const modelDataCopy: any = {
      code: this.codeForm.get('code')?.value,
    }
    this.isLoading =  true;
    this.passwordRecoveryService.validateToken(modelDataCopy).subscribe(
      () => {
        this.isLoading =  false;
        this.passwordRecoveryService.recoverInfo = {email: this.email, code: modelDataCopy.code}
        this.router.navigate(['/authenticate/create-password'])
      },
      (error) => {
        this.isLoading =  false;
        this.passwordRecoveryService.recoverInfo = null;
        this.snackBar.open(error, 'Cerrar', {
          duration: 5000,
        });
      }
    )
  }

  updateCodes(event: any, index: number) {
    const inputValue = (event.target as HTMLInputElement).value
    const value = Math.abs(parseInt(inputValue, 10));
    if(isNaN(value) || value < 0 || value > 9) {
      const input = document.getElementById(`digit${index}`) as HTMLInputElement;
      input.value = ''
      return
    }
    let currentCodes = this.codeForm.get('code')?.value.split('') || [];
    currentCodes[index] = value;

    if (currentCodes.length > 4) {
      currentCodes = currentCodes.slice(0, 4);
    }
    this.codeForm.get('code')?.setValue(currentCodes.join(''));
  }

  resendEmail() {
    this.emailSent = false;
    this.passwordRecoveryService.recoverInfo = null;
  }
}
