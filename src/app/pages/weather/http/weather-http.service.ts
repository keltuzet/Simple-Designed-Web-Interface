import { HttpParams } from '@angular/common/http';
import { Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EN } from '@shared/const';
import { GetHttpOption, ParamsObjectModel } from '@shared/models';
import { BaseHttpService } from '@shared/services';
import { Observable } from 'rxjs';

export class WeatherHttpService extends BaseHttpService {
  private apiKey = '4e3a6c2b777ea4174a77f4213a3e4472';
  private translateService: TranslateService;

  constructor(injector: Injector) {
    super(injector);
    this.translateService = injector.get(TranslateService);
  }

  protected get<T>(
    urlPathname: string,
    httpOptions: GetHttpOption = {}
  ): Observable<T> {
    if (httpOptions.params instanceof HttpParams) {
      httpOptions.params = new HttpParams({ fromString: httpOptions.params.toString(), fromObject: {
        appid: this.apiKey,
      } });
      httpOptions.params.set('appid', this.apiKey);
      // httpOptions.params.set(
      //   'lang',
      //   (this.translateService.currentLang || EN).split('-')[0]
      // );
      console.log(httpOptions.params);
    } else {
      httpOptions.params.appid = this.apiKey;
      httpOptions.params.lang = (this.translateService.currentLang || EN).split(
        '-'
      )[0];
    }
    return super.get(urlPathname, httpOptions);
  }
}
