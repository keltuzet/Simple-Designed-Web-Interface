import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectModule } from '@shared/components/select';
import { I18nComponent } from './i18n.component';
import { LANG_CONFIG } from './i18n.service';
import { LanguageConfig } from './i18n.model';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [I18nComponent],
  imports: [CommonModule, SelectModule, ReactiveFormsModule],
  exports: [I18nComponent],
})
export class I18nModule {
  static forRoot(config: LanguageConfig): ModuleWithProviders<I18nModule> {
    return {
      ngModule: I18nModule,
      providers: [{ provide: LANG_CONFIG, useValue: config || {} }],
    };
  }
}
