import { NgModule } from '@angular/core';
import { NumericInputComponent } from './numeric-input.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NumericInputComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [NumericInputComponent],
})
export class NumericInputModule {}
