/*
  For "Historical Weather Forecast" api doc
        -> https://openweathermap.org/api/one-call-api
  WF    -> WeatherForecast
  CWF   -> CurrentWeatherForecast
  HWF   -> HistoricalWeatherForecast
  Param -> Parametric
  Simp  -> Simplified
*/

import { HourlyWFModel } from './common.model';
import { CWFSimpModel } from './current-weather-forecast.model';

export interface HWFModel {
  current: CWFSimpModel;
  hourly: HourlyWFModel[];
}
