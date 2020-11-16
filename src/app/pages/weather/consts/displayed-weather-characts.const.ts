import { WeatherCharactConfigModel } from '../models/weather-charact.model';
import {
  faWind,
  faExternalLinkAlt,
  faTint,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherUnits } from '../enums';

export const DisplayedWeatherCharacts: WeatherCharactConfigModel[] = [
  {
    icon: faWind,
    path: 'wind_speed',
    unitsType: WeatherUnits.Speed,
  },
  {
    icon: faExternalLinkAlt,
    path: 'pressure',
    unitsType: WeatherUnits.Pressure,
  },
  {
    icon: faTint,
    path: 'humidity',
    unitsType: WeatherUnits.Percent,
  },
  {
    icon: faTint,
    path: 'dew_point',
    unitsType: WeatherUnits.Percent,
  },
];
