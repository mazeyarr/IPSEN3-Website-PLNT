import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { ApiService } from '../../shared/services/api/api.service';
import {IUser, User} from '../../../models/User/user';
import {catchError, retry} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly PREFIX = '/user';

  public isAuthenticated = false;
  private authUser: User;
  private authToken: string;

  constructor(private api: ApiService) {
    this.authToken = '';
  }

  login(username: string, password: string) {
    return new Promise((resolve) => {
      this.api.post({
        auth: false,
        body: new HttpParams()
          .set('username', username)
          .set('password', password),
        endpoint: this.PREFIX + '/login'
      })
        .pipe(
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        this.setAuthUser(new User(user));

        this.setAuthToken(
          this.getAuthUser().jwt
        );

        this.setAuthenticated(true);

        resolve();
      });
    });
  }

  // register(): User {
  //   // TODO: Register
  //   return new User();
  // }

  setAuthenticated(to: boolean) {
    this.isAuthenticated = to;
  }

  setAuthUser(user: User) {
    this.authUser = user;
  }

  getAuthUser(): User {
    return this.authUser;
  }

  getAuthToken(): string {
    return this.authToken;
  }

  setAuthToken(token: string): void {
    this.authToken = token;
  }
}
