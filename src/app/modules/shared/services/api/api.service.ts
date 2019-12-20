import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IApiOptions {
  auth?: boolean;
  endpoint?: string;
  body?: {
    headers?: HttpHeaders | {
      [header: string]: string | string[];
    };
    observe?: any;
    params?: HttpParams | {
      [param: string]: string | string[];
    };
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  private static readonly baseUrl = 'http://localhost:9000';
  private static readonly prefix = '/api';

  get(options: IApiOptions, ): Observable<any> {
    return this.http.get(this.getApiUrl() + options.endpoint, options.body);
  }

  post(options: IApiOptions): Observable<any> {
    return this.http.post(this.getApiUrl() + options.endpoint, options.body);
  }

  put(options: IApiOptions): Observable<any> {
    return this.http.put(this.getApiUrl() + options.endpoint, options.body);
  }

  delete(options: IApiOptions): Observable<any> {
    return this.http.delete(this.getApiUrl() + options.endpoint, options.body);
  }

  getApiUrl = (): string => ApiService.baseUrl + ApiService.prefix;
}
