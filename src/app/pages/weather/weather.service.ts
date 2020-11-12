import { HttpParams } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { GetBaseHttpOptions } from '@shared/models';
import { Observable } from 'rxjs';
import { WeatherHttpService } from './http';
import {
  CWFVisibilitySystemModel,
  RectangleZoneCWFModel,
  CircleZoneCWFModel,
  SeveralLocationsCWFModel,
  PWFModel,
} from './models';

@Injectable()
export class WeatherService extends WeatherHttpService {
  private weatherController = 'weather';
  private oneCallController = 'onecall';

  constructor(injector: Injector) {
    super(injector);
  }

  getCurrentWeatherByCityName(
    cityName: string,
    stateCode?: string,
    countryCode?: string
  ): Observable<CWFVisibilitySystemModel> {
    const httpOptions: GetBaseHttpOptions = {
      params: {
        q: `${cityName}${
          stateCode
            ? countryCode
              ? `,${stateCode},${countryCode}`
              : `,${stateCode}`
            : ''
        }`,
      },
    };
    return this.get<CWFVisibilitySystemModel>(
      this.weatherController,
      httpOptions
    );
  }

  getCurrentWeatherByCityId(id: number): Observable<CWFVisibilitySystemModel> {
    const httpOptions = {
      params: {
        id: id.toString(),
      },
    };
    return this.get<CWFVisibilitySystemModel>(
      this.weatherController,
      httpOptions
    );
  }

  getCurrentWeatherByCoordinates(
    lat: number,
    lon: number
  ): Observable<CWFVisibilitySystemModel> {
    const httpOptions = {
      params: { lat: lat.toString(), lon: lon.toString() },
    };
    return this.get<CWFVisibilitySystemModel>(
      this.weatherController,
      httpOptions
    );
  }

  getCurrentWeatherByZipCode(
    zipCode: number,
    countryCode: string
  ): Observable<CWFVisibilitySystemModel> {
    const httpOptions = { params: { zip: `${zipCode},${countryCode}` } };
    return this.get<CWFVisibilitySystemModel>(
      this.weatherController,
      httpOptions
    );
  }

  getCurrentWeatherForRectangleZone(
    lonLeft: number,
    latBottom: number,
    lonRight: number,
    latTop: number,
    zoom: number
  ): Observable<RectangleZoneCWFModel> {
    const httpOptions = {
      params: {
        bbox: `${lonLeft},${latBottom},${lonRight},${latTop},${zoom}`,
      },
    };
    return this.get<RectangleZoneCWFModel>('box/city', httpOptions);
  }

  getCurrentWeatherForCircleZone(
    lat: number,
    lon: number,
    count: number
  ): Observable<CircleZoneCWFModel> {
    const httpOptions = {
      params: {
        lat: lat.toString(),
        lon: lon.toString(),
        count: count.toString(),
      },
    };
    return this.get<CircleZoneCWFModel>('find', httpOptions);
  }

  getCurrentWeathersByCityIds(
    ids: number[]
  ): Observable<SeveralLocationsCWFModel> {
    const params = {
      id: ids.join(','),
    };
    return this.get<SeveralLocationsCWFModel>('group', { params });
  }

  getWeatherForecastByCoordinates(
    lat: number,
    lon: number,
    exclude?: string[]
  ): Observable<PWFModel> {
    const params = new HttpParams({
      fromObject: {
        lat: lat.toString(),
        lon: lon.toString(),
      }
    });
    params.set('dadsa', '213');
    if (exclude?.length) {
      params.append('exclude', exclude.join(','));
    }
    return this.get<PWFModel>(this.oneCallController, { params });
  }

  getHistoricalWeatherForecastByCoordinates(
    lat: number,
    lon: number,
    dt: Date
  ): Observable<any> {
    const httpOptions = {
      params: {
        lat: lat.toString(),
        lon: lon.toString(),
        dt: dt.getTime().toString(),
      },
    };
    return this.get(`${this.oneCallController}/timemachine`, httpOptions);
  }
}
