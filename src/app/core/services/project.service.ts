import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private endpoint = 'project'

  constructor(
    private http: HttpClient,
  ) { }

  public getItems(): Observable<Project[]> {
    return this.http.get(`${environment.hostApi}/${this.endpoint}`).pipe(
      map((response: any) => {
        if (response) {
          return response
        } else {
          throw new Error('error')
        }
      }), catchError(() => {
        return throwError(() => new Error('Ha habido un error con el servidor.'));
      })
    )
  }


  public saveItem(data: Project): Observable<Project>{
    if(data.lang !== 'es' && data.identify_lang_project_id) {
      return this.checkLanguages({identifyCode: data.identify_lang_project_id, lang: 'es'}).pipe(
        switchMap((response: any) => {
          if(response ===1) {
            return this.http.post<Project>(`${environment.hostApi}/${this.endpoint}`, data);
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
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(() => new Error(error.error.message));
        })
      )
    }
  }

  public updateItem(options: {id: string, data: Project}): Observable<Project>{
    return this.http.put(`${environment.hostApi}/${this.endpoint}/${options.id}`, options.data).pipe(
      catchError((error: any) => {
        console.error('Error al actualizar: ', error)
        throw error
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
