import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { TextView } from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private endpoint = 'text-data-view-config'

  constructor(
    private http: HttpClient,
  ) { }

  public getItems() {
    return this.http.get(`${environment.hostApi}/${this.endpoint}`).pipe(
      map((response: any) => {
        if (response) {
          return response
        } else {
          throw new Error('error')
        }
      })
    )
  }


  public saveItem(data: TextView): Observable<TextView>{
    if(data.lang !== 'es' && data.identify_lang_text_view_id) {
      return this.checkLanguages({identifyCode: data.identify_lang_text_view_id, lang: 'es'}).pipe(
        switchMap((response: any) => {
          if(response ===1) {
            return this.http.post<TextView>(`${environment.hostApi}/${this.endpoint}`, data);
          } else {
            return throwError(() => new Error('Hay que crear primero la versión en español.'));
          }
        }),
        catchError(() => {
          return throwError(() => new Error('Hay que crear primero la versión en español.'));
        })
      )
    } else {
      return this.http.post(`${environment.hostApi}/${this.endpoint}`, data).pipe(
        map((response: any) => {
          if(response) {
            return response;
          } else {
            throw 'error'
          }
        })
      )
    }
  }

  public updateItem(options: {id: string, data: TextView}): Observable<TextView>{
    return this.http.put(`${environment.hostApi}/${this.endpoint}/${options.id}`, options.data).pipe(
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

  deleteItem(id: string | undefined) {
    return this.http.delete(`${environment.hostApi}/${this.endpoint}/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.error.message));
      })
    )
  }

  checkLanguages(body: {identifyCode: string, lang: string}) {
    return this.http.post(`${environment.hostApi}/${this.endpoint}/getCountLang`, body).pipe(
      map((response: any) => {
        if (response) {
          return response
        } else {
          throw new Error('error')
        }
      }),
      catchError(error => {
        console.error(error);
        return throwError(error)
      })
    )
  }
}
