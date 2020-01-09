import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth token from the service.
    if (Boolean(req.headers.get('auth'))) {
      if (!this.isAuthTokenSet()) {
        throw new Error('Auth token is not set!');
      }

      req.headers.delete('auth');

      const authToken = this.auth.getAuthToken();

      // cloned headers, updated with the authorization.
      const authReq = req.clone({ setHeaders: { Authorization: authToken } });

      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    return next.handle(req);
  }

  isAuthTokenSet() {
    return this.auth.getAuthToken() !== '';
  }
}
