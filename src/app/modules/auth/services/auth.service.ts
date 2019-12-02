import { Injectable } from '@angular/core';
import { User } from '../../../models/user';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUser: User;
  private authToken: string;

  constructor(private api: ApiService, private http: HttpClient) {
    this.authToken = '';
  }

  login(): User {
    // TODO: Login
    // TODO: Set token after login
    return new User();
  }

  register(): User {
    // TODO: Register
    return new User();
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
