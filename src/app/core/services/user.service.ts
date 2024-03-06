import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, throwError } from 'rxjs';
import { User, UserModel } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = new BehaviorSubject<User | null>(null)
  private tokenExpirationTimer: any;
  private userEndpoint = 'user'
  private authEndpoint = 'auth'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(data: User) {
    return this.http.post(`${environment.hostApi}/${this.authEndpoint}/login`, data).pipe(
      map((response: any) => {
        if(response.user.role !== 'ADMIN') {
          throw {error: {message: 'Este usuario no tiene permisos para acceder a la aplicación.'}}
        }
        return this.set_auth_data(response)
      }),
      catchError(this.handleError)
    )
  }

  public autoLogin() {
    const userDataString = localStorage.getItem('userData');
    const userData: UserModel = userDataString ? JSON.parse(userDataString) : null;
    if (!userData) {
      return;
    }

    let decodedToken: any
    let expiration: any

    if(userData._token) {
      decodedToken = this.decodeToken(userData._token)
    }

    const loadedUser = new UserModel(
      userData.id,
      userData.name,
      userData.email,
      userData._token,
      decodedToken.expiration
    )
    if(loadedUser._token) {
      this.user.next(loadedUser);
      this.autoLogout(decodedToken.expirationDuration)
    }
  }

  private set_auth_data(data: any) {
    let decodedToken: any

    if(data.token) {
      decodedToken = this.decodeToken(data.token)
    }

    const user = new UserModel (
      data.user.id,
      data.user.name,
      data.user.email,
      data.token,
      decodedToken.expiration
    );

    this.user.next(user);
    this.autoLogout(decodedToken.expirationDuration)
    localStorage.setItem('userData', JSON.stringify(user))
  }

  public logout() {
    this.user.next(null);
    this.router.navigate(['/authenticate']);
    localStorage.removeItem('userData')
    if(this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  public autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(()=> {
      this.logout();
    }, expirationDuration)
  }

  private decodeToken(token: string) {
    const decodedToken: any = jwtDecode(token);
    const expiration: Date = new Date(decodedToken.exp * 1000)
    const expirationDuration = expiration.getTime() - new Date().getTime()

    return {
      expiration,
      expirationDuration
    }
  }

  public changePassword(data: User) {
    return of(true)
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.error.message
    if(errorRes.error && errorRes.error.message) {
      switch (errorRes.error.message) {
        case 'Invalid password':
          errorMessage = 'Contraseña incorrecta.';
          break;
        case 'Invalid email':
          errorMessage = 'No existe una cuenta con ese email.';
          break;
      }

    }
    return throwError(errorMessage)
  }

  public getItems() {
    return this.http.get(`${environment.hostApi}/${this.userEndpoint}`).pipe(
      map((response: any) => {
        if (response) {
          // response = response.filter((user: User) => user.role==='ADMIN')
          return response
        } else {
          throw new Error('error')
        }
      })
    )
  }

  public saveItem(data: User): Observable<User>{
    return this.http.post(`${environment.hostApi}/${this.userEndpoint}`, data).pipe(
      map((response: any) => {
        console.log(response)
        if(response) {
          return response;
        } else {
          throw 'error'
        }
      })
    )
  }

  public updateItem(options: {id: string, data: User}): Observable<User>{
    return this.http.put(`${environment.hostApi}/${this.userEndpoint}/${options.id}`, options.data).pipe(
      catchError((error: any) => {
        console.error('Error al actualizar: ', error)
        throw error
      })
    )
  }

  deleteItem(id: string | undefined) {
    return this.http.delete(`${environment.hostApi}/${this.userEndpoint}/${id}`).pipe(
      map(response => {
        return response
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error(error.error.message));
      })
    )
  }
}