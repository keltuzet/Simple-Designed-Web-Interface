import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LanguageOption } from './i18n.model';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-i18n-select',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class I18nComponent {
  languages: LanguageOption[];
  selectedLanguage: LanguageOption;
  control = new FormControl();

  constructor(private languageSv: I18nService) {
    this.selectedLanguage = this.languageSv.currentLanguage;
    this.languages = this.languageSv.availableLanguages;
  }

  handleChange(option: string): void {
    this.languageSv.updateLang(option);
  }
}
