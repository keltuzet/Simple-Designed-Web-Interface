import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { I18nModule } from '@i18n';
import { SharedModule } from '@shared/modules';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [SharedModule, RouterModule, I18nModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule {}
