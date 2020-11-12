/*
  For "One Call Weather Forecast" api doc
        -> https://openweathermap.org/api/one-call-api
  WF    -> WeatherForecast
  CWF   -> CurrentWeatherForecast
  PWF   -> PeriodWeatherForecast
  Param -> Parametric
  Simp  -> Simplified
*/

import { CoordinationModel } from './coordination.model';
import {
  WFTimezoneExtendedModel,
  WFAlertModel,
  DailyWFModel,
  HourlyWFModel,
  MinutelyWFModel,
} from './common.model';
import { CWFSimpModel } from './current-weather-forecast.model';

export interface PWFModel extends CoordinationModel, WFTimezoneExtendedModel {
  timezone_offset: number;
  current: CWFSimpModel;
  minutely: MinutelyWFModel[];
  hourly: HourlyWFModel[];
  daily: DailyWFModel[];
  alerts: WFAlertModel[];
}
