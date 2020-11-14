/*
  WF    -> WeatherForecast
  Param -> Parametric
  Simp  -> Simplified
  Temp  -> Temperature
*/

export type WFUnitsType = 'standard' | 'metric' | 'imperial';

/*
  lon -> City geo location, longitude
  lat -> City geo location, latitude
*/
export interface WFCoordinationModel {
  lon: number;
  lat: number;
}

/*
  timezone -> Shift in seconds from UTC
*/
export interface WFTimezoneModel {
  timezone: number;
}

/*
  timezone        -> Timezone name for the requested location
  timezone_offset -> Shift in seconds from UTC
*/
export interface WFTimezoneExtendedModel {
  timezone: string;
  timezone_offset: number;
}

/*
  dt -> Time of data calculation, unix, UTC
*/
export interface WFDateModel {
  dt: string;
}

/*
  Average visibility, metres
*/
export interface WFVisibilityModel {
  visibility: number;
}

/*
  id   -> Weather condition id
  main -> Group of weather parameters (Rain, Snow, Extreme etc.)
  icon -> Weather icon id
*/
export interface WFConditionInfoParamModel {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WFConditionInfoModel {
  weather: WFConditionInfoParamModel[];
}

/*
  humidity -> Humidity, %
  pressure -> Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
*/
export interface WFAirSimpModel {
  humidity: number;
  pressure: number;
}

/*
  dew_point ->
  Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form.
  Units – default: kelvin, metric: Celsius, imperial: Fahrenheit.
*/
export interface WFAirModel extends WFAirSimpModel {
  dew_point: number;
}

/*
  temp, feels_like
           -> Unit default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
*/
export interface WFAirSimpParamModel extends WFAirSimpModel {
  temp: number;
  feels_like: number;
}

/*
  temp_min, temp_max
             -> Unit default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  sea_level  -> pressure -> Atmospheric pressure on the sea level, hPa
  grnd_level -> Atmospheric pressure on the ground level, hPa
*/
export interface WFAirParamModel extends WFAirSimpParamModel {
  temp_min: number;
  temp_max: number;
  sea_level?: number;
  grnd_level?: number;
}

/*
  wind_speed -> Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
  wind_gust  -> (where available) Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour.
  wind_deg   -> Wind direction, degrees (meteorological)
*/
export interface WFWindModel {
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
}

/*
  speed -> Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  deg   -> Wind direction, degrees (meteorological)
  gust  -> Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
*/
export interface WFWindParamModel {
  speed: number;
  deg: number;
  gust?: number;
}

/*
  clouds -> Cloudiness, %
*/
export interface WFCloudModel {
  clouds: number;
}

/*
  all -> Cloudiness, %
*/
export interface WFCloudParamModel {
  all: number;
}

/*
  1h -> Rain volume for the last 1 hour, mm
  3h -> Rain volume for the last 3 hours, mm
*/
export interface WFRainParamModel {
  '1h': number;
  '3h': number;
}

/*
  1h -> Snow volume for the last 1 hour, mm
  3h -> Snow volume for the last 3 hours, mm
*/
export interface WFSnowParamModel {
  '1h': number;
  '3h': number;
}

/*
  country -> Country code
*/
export interface WFSystemSimpParamModel {
  country: string;
}

/*
  sunrise -> Sunrise time, unix, UTC
  sunset  -> Sunset time, unix, UTC
*/
export interface WFSunSystemInfoModel {
  sunrise: number;
  sunset: number;
}

/*
  type, id, message
          -> Internal parameter
*/
export interface WFSystemParamModel
  extends WFSystemSimpParamModel,
    WFSunSystemInfoModel {
  type?: number;
  id?: number;
  message?: number;
}

/*
  uvi -> Midday UV index
*/
export interface WFMiddayUVIndexModel {
  uvi: number;
}

/*
  pop -> Probability of precipitation
*/
export interface WFPrecipitationModel {
  pop: number;
}

/*
  sender_name -> Name of the alert source
  description -> Description of the alert
  event       -> Alert event name
  start       -> Date and time of the start of the alert, Unix, UTC
  end         -> Date and time of the end of the alert, Unix, UTC
*/
export interface WFAlertModel {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
}

/*
  precipitation -> Precipitation volume, mm
*/
export interface MinutelyWFModel extends WFDateModel {
  precipitation: number;
}

/*
  morn  -> Morning temperature.
  day   -> Day temperature.
  eve   -> Evening temperature.
  night -> Night temperature.
  min   -> Min daily temperature.
  max   -> Max daily temperature.
*/
export interface WFTempModel {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

/*
  morn  -> Morning temperature.
  day   -> Day temperature.
  eve   -> Evening temperature.
  night -> Night temperature.
*/
export interface WFTempFeelsModel {
  day: number;
  night: number;
  eve: number;
  morn: number;
}

export interface HourlyWFModel
  extends WFDateModel,
    WFAirModel,
    WFWindModel,
    WFPrecipitationModel,
    WFConditionInfoModel,
    WFVisibilityModel,
    WFCloudModel {
  rain?: WFRainParamModel;
  snow?: WFSnowParamModel;
}

export interface DailyWFModel
  extends WFDateModel,
    WFSunSystemInfoModel,
    WFAirModel,
    WFWindModel,
    WFCloudModel,
    WFMiddayUVIndexModel,
    WFPrecipitationModel,
    WFConditionInfoModel {
  temp: WFTempModel;
  feels_like: WFTempFeelsModel;
  rain: number;
}
