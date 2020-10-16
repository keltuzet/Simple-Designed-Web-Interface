import { NgModule } from '@angular/core';
import { SdwiPaginatorComponent } from './sdwi-paginator.component';
import { ForToModule } from '@shared/directives';
import { SharedModule } from '@shared/modules';
import { NumericInputModule } from '../numeric-input';

@NgModule({
  declarations: [SdwiPaginatorComponent],
  imports: [SharedModule, ForToModule, NumericInputModule],
  exports: [SdwiPaginatorComponent],
})
export class SdwiPaginatorModule {}
