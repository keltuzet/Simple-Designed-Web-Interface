import { NgModule } from '@angular/core';
import { SdwiNumericInputComponent } from './sdwi-numeric-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SdwiNumericInputComponent],
  imports: [FontAwesomeModule, FormsModule],
  exports: [SdwiNumericInputComponent],
})
export class SdwiNumericInputModule {}
