import { HttpHeaders, HttpParams } from '@angular/common/http';
import { StringableOptionalIdentification } from './common';

export interface HttpParamsObjectModel {
  [param: string]: string | string[];
}

type CommonHttpParams = HttpParams | HttpParamsObjectModel;

export interface GetBaseHttpOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?: CommonHttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

export interface GetHttpOptions extends GetBaseHttpOptions, StringableOptionalIdentification {}
