import { GetHttpOptions } from '@shared/models';
import { WFUnitsType } from './weather-forecast-common.model';

export interface WFGetHttpOptions extends GetHttpOptions {
  units?: WFUnitsType;
}
