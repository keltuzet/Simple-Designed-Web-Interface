import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeatherInterceptor implements HttpInterceptor {
  private apiKey = '4e3a6c2b777ea4174a77f4213a3e4472';

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    req.params.append('apiKey', this.apiKey);
    console.log(req.params.getAll('apiKey'));
    return next.handle(req);
  }
}
