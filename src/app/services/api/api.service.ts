import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  private static readonly baseUrl = 'http://localhost:9000';
  private static readonly prefix = '/api';

  static get() {

  }

  static post() {

  }

  static put() {

  }

  getApiUrl = (): string => ApiService.baseUrl + ApiService.prefix;
}
