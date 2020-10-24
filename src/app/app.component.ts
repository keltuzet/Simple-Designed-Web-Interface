import { Component } from '@angular/core';
import { I18nService } from '@i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private languageService: I18nService) {
    this.languageService.initLang();
  }
}
