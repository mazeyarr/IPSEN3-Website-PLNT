import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IApiOptions {
  auth?: boolean;
  endpoint?: string;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private static readonly baseUrl = 'http://localhost:9000';
  private static readonly prefix = '/api';

  get(options: IApiOptions) {
    return this.http.get(this.getApiUrl() + options.endpoint, options.body);
  }

  post(options: IApiOptions) {
    return this.http.post(this.getApiUrl() + options.endpoint, options.body);
  }

  put(options: IApiOptions) {
    return this.http.put(this.getApiUrl() + options.endpoint, options.body);
  }

  getApiUrl = (): string => ApiService.baseUrl + ApiService.prefix;
}
