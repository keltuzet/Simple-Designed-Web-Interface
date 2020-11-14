import { HttpHeaders, HttpParams } from '@angular/common/http';
import { StringableOptionalIdentification } from './common';

export interface ParamsObjectModel {
  [param: string]: string | string[];
}

export interface GetBaseHttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?: HttpParams | ParamsObjectModel;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface GetHttpOptions extends GetBaseHttpOptions, StringableOptionalIdentification {}
