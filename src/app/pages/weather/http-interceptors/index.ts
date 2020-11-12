import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { WeatherInterceptor } from './weather-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true },
];
