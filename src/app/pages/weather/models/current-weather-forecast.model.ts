/*
  For "current weather" api doc
        -> https://openweathermap.org/current
  WF    -> WeatherForecast
  CWF   -> CurrentWeatherForecast
  Param -> Parametric
  Simp  -> Simplified
*/

import {
  WFAirParamModel,
  WFWindParamModel,
  WFConditionInfoParamModel,
  WFSystemParamModel,
  WFCloudParamModel,
  WFSnowParamModel,
  WFTimezoneModel,
  WFDateModel,
  WFSystemSimpParamModel,
  WFVisibilityModel,
  WFAirModel,
  WFCloudModel,
  WFConditionInfoModel,
  WFMiddayUVIndexModel,
  WFRainParamModel,
  WFSunSystemInfoModel,
  WFWindModel,
} from './common.model';
import { CoordinationModel } from './coordination.model';

export interface CWFSimpModel
  extends WFDateModel,
    WFSunSystemInfoModel,
    WFVisibilityModel,
    WFWindModel,
    WFAirModel,
    WFCloudModel,
    WFMiddayUVIndexModel,
    WFConditionInfoModel {
  rain?: WFRainParamModel;
  snow?: WFSnowParamModel;
}

export interface CWFBaseModel extends WFDateModel {
  id: number;
  name: string;
  coord: CoordinationModel;
  weather: WFConditionInfoParamModel[];
  main?: WFAirParamModel;
  wind?: WFWindParamModel;
  clouds?: WFCloudParamModel;
  snow?: WFSnowParamModel;
}

export interface CWFModel extends CWFBaseModel, WFTimezoneModel {
  cod: number;
  base: string;
}

export interface CWFVisibilitySystemModel extends CWFModel, WFVisibilityModel {
  sys: WFSystemParamModel;
}

export interface CWFBaseSystemModel extends CWFBaseModel {
  sys: WFSystemParamModel;
}

export interface CWFBaseSimpSystemModel extends CWFBaseModel {
  sys: WFSystemSimpParamModel;
}

export interface RectangleZoneCWFModel {
  cod: number;
  calctime: number;
  cnt: number;
  list: CWFBaseModel & WFVisibilityModel;
}

export interface CircleZoneCWFModel {
  cod: string;
  message: string;
  count: number;
  list: CWFBaseSimpSystemModel;
}

export interface SeveralLocationsCWFModel {
  cnt: number;
  list: CWFBaseSystemModel[];
}
