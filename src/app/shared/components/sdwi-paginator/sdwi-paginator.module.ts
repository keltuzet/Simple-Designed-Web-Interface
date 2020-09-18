import { NgModule } from '@angular/core';
import { SdwiPaginatorComponent } from './sdwi-paginator.component';
import { ForToModule } from '@shared/directives';
import { SharedModule } from '@shared/modules';
import { SdwiNumericInputModule } from '../sdwi-numeric-input';

@NgModule({
  declarations: [SdwiPaginatorComponent],
  imports: [SharedModule, ForToModule, SdwiNumericInputModule],
  exports: [SdwiPaginatorComponent],
})
export class SdwiPaginatorModule {}
