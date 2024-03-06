import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Recomendation } from '../models/recomendation';

@Injectable({
  providedIn: 'root'
})
export class RecomendationService {
  private endpoint = 'recommendation'

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


  public saveItem(data: any): Observable<Recomendation>{
    if(data.lang !== 'es' && data.dentify_lang_recommended_id) {
      return this.checkLanguages({identifyCode: data.identify_lang_recommended_id, lang: 'es'}).pipe(
        switchMap((response: any) => {
          if(response ===1) {
            return this.http.post<Recomendation>(`${environment.hostApi}/${this.endpoint}`, data);
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

  public saveImage(data: any) {
    return this.http.put(data.urlPostImage, data.formBody)
  }

  public updateItem(options: {id: string, data: any}): Observable<Recomendation>{
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

  checkLanguages(body: {identifyCode: string | undefined, lang: string}) {
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
