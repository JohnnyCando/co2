import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../core/models/user.model';
import { UserService } from '../../core/services/user.service';
import { Router, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { AngularMaterialModule } from '../../shared/angular-material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, AngularMaterialModule, RouterModule, LoaderComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide: boolean = true;
  public isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.toFormGroup()
  }
  
  public toFormGroup() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  public submit () {

    if (this.loginForm.invalid) {
      return;
    }

    const modelDataCopy: User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.isLoading =  true;

    this.userService.login(modelDataCopy).subscribe(
      () => {
        this.isLoading =  false;
        this.router.navigate(['/dashboard'])
      },
      (error) => {
        this.isLoading =  false;
        this.snackBar.open(error, 'Cerrar', {
          duration: 5000,
        });
      }
    )
  }
}
