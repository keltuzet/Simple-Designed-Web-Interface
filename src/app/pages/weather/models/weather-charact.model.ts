import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { WeatherUnits } from '../enums';

export interface WeatherCharactCommonModel {
  icon: IconDefinition;
  unitsType: WeatherUnits;
}

export interface WeatherCharactConfigModel extends WeatherCharactCommonModel {
  path: string;
}

export interface WeatherCharactResultModel extends WeatherCharactCommonModel {
  value: string | number;
}
