import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SelectComponent } from './select.component';
import { OptionComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SelectComponent, OptionComponent],
  imports: [CommonModule, OverlayModule, FontAwesomeModule],
  exports: [SelectComponent, OptionComponent],
})
export class SelectModule {}
