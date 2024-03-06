import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TextView } from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class RecoveryCodePasswordService {
  private endpoint = 'recovery-code-password'
  private lang = 'es'
  private _recoverInfo: {email: string, code: string} | null = null

  constructor(
    private http: HttpClient,
  ) { }

  set recoverInfo(data: {email: string, code: string} | null) {
    this._recoverInfo = data;
  }

  get recoverInfo(): {email: string, code: string} | null {
    return this._recoverInfo;
  }

  public hasValidRecoveryData() {
    return this._recoverInfo !== null;
  }

  public sendEmailCode(data: {email: string}): Observable<any>{
    const headers = new HttpHeaders().set('lang', this.lang)
    return this.http.post(`${environment.hostApi}/${this.endpoint}/`, data, { headers }).pipe(
      map((response: any) => {
        if(response) {
          return response;
        } else {
          throw 'error'
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.error.message));
      })
    )
  }

  public validateToken(data: {code: string}): Observable<TextView>{
    return this.http.get(`${environment.hostApi}/${this.endpoint}/password-reset-validate-token/${data.code}`).pipe(
      map((response: any) => {
        if(response) {
          return response;
        } else {
          throw 'error'
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.error.message));
      })
    )
  }

  public resetPassword(data: {email: string; password: string}, code: string = '') {
    return this.http.post(`${environment.hostApi}/${this.endpoint}/password-reset/${code}`, data).pipe(
      map((response: any) => {
        if(response) {
          return response;
        } else {
          throw 'error'
        }
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.error.message));
      })
    )
  }

}
