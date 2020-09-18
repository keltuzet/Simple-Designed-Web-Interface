import { NgModule } from '@angular/core';
import { SdwiNumericInputComponent } from './sdwi-numeric-input.component';
import { SharedModule } from '../../modules';

@NgModule({
  declarations: [SdwiNumericInputComponent],
  imports: [SharedModule],
  exports: [SdwiNumericInputComponent],
})
export class SdwiNumericInputModule {}
