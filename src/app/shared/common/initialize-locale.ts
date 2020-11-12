import { registerLocaleData } from '@angular/common';

export function initializeLocale(langId: string): Promise<void> {
  return import(`@angular/common/locales/${langId}.js`)
    .then((module) => registerLocaleData(module.default))
    .catch((error) => {
      console.error('This is language id not found!');
      console.error(error);
      throw error;
    });
}
