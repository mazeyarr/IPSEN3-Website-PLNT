import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ApiService} from '../../shared/services/api/api.service';
import {IUser, User} from '../../../models/User/user';
import {catchError, retry, tap} from 'rxjs/operators';
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
        if (user.username != null) {
          console.log('user exists');
          this.setAuthUser(new User(user));
          this.setAuthToken(
            this.getAuthUser().jwt
          );

          this.setAuthenticated(true);

          resolve();
        } else {
          console.log('user doesnt exist');
          resolve();
        }
      });
    });
  }

  register(username: string, password: string, firstname: string, lastname: string) {
    return new Promise((resolve) => {
      this.api.post({
        auth: false,
        body: new HttpParams()
          .set('username', username)
          .set('password', password)
          .set('firstname', firstname)
          .set('lastname', lastname)
          .set('role', 'USER'),
        endpoint: this.PREFIX + '/create'
      })
        .pipe(
          tap(data => console.log(data)),
          retry(2),
          catchError(() => of(this.setAuthenticated(false)))
        ).subscribe((user: IUser) => {
        resolve();
      });
    });
  }

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
