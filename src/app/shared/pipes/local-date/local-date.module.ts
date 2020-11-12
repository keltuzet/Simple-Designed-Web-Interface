import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { LocalDatePipe } from './local-date.pipe';

@NgModule({
  declarations: [LocalDatePipe],
  exports: [LocalDatePipe],
  imports: [CommonModule],
  providers: [TranslateService],
})
export class LocalDateModule {}
