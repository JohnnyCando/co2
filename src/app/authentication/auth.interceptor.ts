import { HttpInterceptorFn } from '@angular/common/http';
import { UserModel } from '../core/models/user.model';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const userDataString = localStorage.getItem('userData');
  const userData: UserModel = userDataString ? JSON.parse(userDataString) : null;
  if (userData) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userData._token}`),
    });
    return next(authReq)
  }
  return next(req)
}
