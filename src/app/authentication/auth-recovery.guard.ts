import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { RecoveryCodePasswordService } from '../core/services/recovery-code-password.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecoveryGuard implements CanActivate {
  constructor(private passwordRecoveryService: RecoveryCodePasswordService, private router: Router) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.passwordRecoveryService.hasValidRecoveryData()) {
      return true;
    } else {
      return this.router.createUrlTree(['/'])
    }
  }
}