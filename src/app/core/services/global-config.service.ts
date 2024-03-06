import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  private globalConfigEndpoint = 'global-config'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getItems() {
    return this.http.get(`${environment.hostApi}/${this.globalConfigEndpoint}`).pipe(
      map((response: any) => {
        if (response) {
          return response
        } else {
          throw new Error('error')
        }
      })
    )
  }

  public updateItem(options: {id: string, data: any}): Observable<any>{
    return this.http.put(`${environment.hostApi}/${this.globalConfigEndpoint}/${options.id}`, options.data).pipe(
      catchError((error: any) => {
        console.error('Error al actualizar: ', error)
        throw error
      })
    )
  }
}
