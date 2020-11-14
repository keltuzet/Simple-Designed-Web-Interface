import { HttpClient } from '@angular/common/http';
import { InjectionToken, Injector } from '@angular/core';
import { GetHttpOptions } from '@shared/models';
import { Observable } from 'rxjs';
import { SpinnerService } from '../spinner';

export const API_URL = new InjectionToken<string>('API_URL');

export class BaseHttpService extends SpinnerService {
  private http: HttpClient;
  private url: string;
  protected get apiUrl(): string {
    if (!this.url) {
      throw Error('Set "URL" for API requests in your config!');
    }

    return this.url;
  }
  protected set apiUrl(url: string) {
    this.url = url;
  }

  constructor(private injector: Injector) {
    super(injector);
    this.url = this.injector.get(API_URL);
    this.http = this.injector.get(HttpClient);
  }

  protected get<T>(
    urlPathname: string,
    httpOptions: GetHttpOptions = {}
  ): Observable<T> {
    const { id } = httpOptions;
    const requestUrl = `${this.apiUrl}/${urlPathname}${id ? `/${id}` : ''}`;

    return this.http.get<T>(requestUrl, httpOptions);
  }
}
