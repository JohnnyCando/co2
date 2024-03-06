import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FrequentQuestion } from '../models/frequent-question.model';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrequentQuestionService {
  private endpoint = 'frequently-asked-question'

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


  public saveItem(data: FrequentQuestion): Observable<FrequentQuestion>{
    if(data.lang !== 'es' && data.identify_lang_frequently_question_id) {
      return this.checkLanguages({identifyCode: data.identify_lang_frequently_question_id, lang: 'es'}).pipe(
        switchMap((response: any) => {
          if(response === 1) {
            return this.http.post<FrequentQuestion>(`${environment.hostApi}/${this.endpoint}`, data);
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

  public updateItem(options: {id: string, data: FrequentQuestion}): Observable<FrequentQuestion>{
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
        // console.error(error);
        return throwError(error)
      })
    )
  }
}
