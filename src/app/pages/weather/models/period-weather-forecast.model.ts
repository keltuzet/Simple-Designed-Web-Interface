/*
  For "One Call Weather Forecast" api doc
        -> https://openweathermap.org/api/one-call-api
  WF    -> WeatherForecast
  CWF   -> CurrentWeatherForecast
  PWF   -> PeriodWeatherForecast
  Param -> Parametric
  Simp  -> Simplified
*/

import {
  WFTimezoneExtendedModel,
  WFAlertModel,
  DailyWFModel,
  HourlyWFModel,
  MinutelyWFModel,
  WFCoordinationModel,
} from './weather-forecast-common.model';
import { CWFSimpModel } from './current-weather-forecast.model';

export interface PWFModel extends WFCoordinationModel, WFTimezoneExtendedModel {
  timezone_offset: number;
  current: CWFSimpModel;
  minutely: MinutelyWFModel[];
  hourly: HourlyWFModel[];
  daily: DailyWFModel[];
  alerts: WFAlertModel[];
}
