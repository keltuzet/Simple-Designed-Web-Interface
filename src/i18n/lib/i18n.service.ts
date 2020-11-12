import { Injectable, Inject, InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { LanguageOption, LanguageConfig } from './i18n.model';
import { initializeLocale } from '@shared/common';
import { EN } from '@shared/const';

export const LANG_CONFIG = new InjectionToken<LanguageConfig>('LANG_CONFIG');

@Injectable({
  providedIn: 'root',
})
export class I18nService {
  private _valueChanges: Subject<string> = new Subject();

  get currentLanguage(): LanguageOption {
    return this.availableLanguages.find(
      (lang) =>
        lang.value ===
        (this.translate.currentLang || this.translate.defaultLang)
    );
  }

  get availableLanguages(): LanguageOption[] {
    return this.langConfig.languageOptions;
  }

  get valueChanges(): Subject<string> {
    return this._valueChanges;
  }

  constructor(
    private translate: TranslateService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LANG_CONFIG) protected langConfig: LanguageConfig
  ) {}

  initLang(): void {
    const { languages, storeKey, defaultLang } = this.langConfig;

    languages.forEach((lang) => {
      if (lang === EN) {
        return;
      }
      initializeLocale(lang);
    });

    this.translate.addLangs(languages);
    const browserLang = localStorage.getItem(storeKey);

    if (browserLang) {
      this.translate.use(
        browserLang.match(new RegExp(languages.join('|')))
          ? browserLang
          : defaultLang
      );
    } else {
      localStorage.setItem(storeKey, defaultLang);
      this.translate.setDefaultLang(defaultLang);
    }

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(storeKey, event.lang);
    });

    this.updateLang(this.translate.currentLang);
    this._valueChanges.next(this.translate.currentLang);
  }

  /**
   * Function for update language in the application and update html document lang attribute
   * @param lang string
   */
  updateLang(lang: string): void {
    this.document.documentElement.lang = lang;
    this.translate.use(lang);
    this._valueChanges.next(lang);
  }
}
