import { AsyncPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WeatherUnits } from '../enums';
import { WFUnitsType } from '../models';

@Pipe({
  name: 'unit',
})
export class UnitPipe implements PipeTransform {
  constructor(
    private translateService: TranslateService,
    private async: AsyncPipe
  ) {}

  transform(
    value: string | number,
    unit: WeatherUnits,
    unitType: WFUnitsType = 'metric'
  ): string {
    switch (unit) {
      case WeatherUnits.Length:
        return `${value}${this.getTranslationKey(unit)}`;
      case WeatherUnits.Percent:
        return `${value}%`;
      case WeatherUnits.Pressure:
        return `${value}${this.getTranslationKey(unit)}`;
      case WeatherUnits.ShortLength:
        return `${value}${this.getTranslationKey(unit)}`;
      case WeatherUnits.Speed:
        return `${value}${this.getTranslationKey(unit, false, unitType)}`;
      case WeatherUnits.Temperature:
        return `${value}${this.getTranslationKey(unit, false, unitType)}`;
    }
  }

  getTranslationKey(
    unitKey: string,
    common = true,
    unitType: WFUnitsType = 'metric'
  ): string {
    return this.async.transform(
      common
        ? this.translateService.get(`UNITS.common.${unitKey}`)
        : this.translateService.get(`UNITS.${unitType}.${unitKey}`)
    );
  }
}
