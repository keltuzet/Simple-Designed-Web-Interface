import { HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { DEFAULT_LANG } from '@shared/const';
import { GetHttpOptions } from '@shared/models';
import { BaseHttpService } from '@shared/services';
import { WFGetHttpOptions } from '../models';

export class WeatherHttpService extends BaseHttpService {
  private apiKey = '4e3a6c2b777ea4174a77f4213a3e4472';
  private translateService: TranslateService;

  get currentLang(): string {
    return (this.translateService.currentLang || DEFAULT_LANG).split('-')[0];
  }

  constructor(injector: Injector) {
    super(injector);
    this.translateService = injector.get(TranslateService);
  }

  protected get<T>(
    urlPathname: string,
    httpOptions: WFGetHttpOptions = {}
  ): Observable<T> {
    const paramsRef = httpOptions.params;
    if (httpOptions.params instanceof HttpParams) {
      httpOptions.params = httpOptions.params.append('appid', this.apiKey);
      httpOptions.params = httpOptions.params.append('lang', this.currentLang);
    } else {
      httpOptions.params.appid = this.apiKey;
      httpOptions.params.lang = this.currentLang;
    }
    return super.get(urlPathname, httpOptions);
  }
}
