import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { I18N_CONFIG } from '../../const';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {}

  transform(
    value: string | Date | number,
    format = 'short',
    isUtc = true
  ): string {
    if (value == null || value === '' || value !== value) {
      return null;
    }

    const locale =
      this.translateService.currentLang ||
      this.translateService.defaultLang ||
      I18N_CONFIG.defaultLang;
    return formatDate(value, format, locale);
  }
}
