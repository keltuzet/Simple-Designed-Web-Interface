import { NgModule } from '@angular/core';
import { SharedFormsModule, SharedModule } from '@shared/modules';
import { CalendarService } from './services';
import {
  DatePickerComponent,
  DateInputComponent,
  TimePickerComponent,
  DateTimePickerComponent,
  CalendarComponent,
  TimerComponent,
} from './components';

@NgModule({
  declarations: [
    DatePickerComponent,
    DateInputComponent,
    TimePickerComponent,
    DateTimePickerComponent,
    CalendarComponent,
    TimerComponent,
  ],
  exports: [
    DatePickerComponent,
    DateInputComponent,
    TimePickerComponent,
    DateTimePickerComponent,
    CalendarComponent,
    TimerComponent,
  ],
  imports: [SharedModule, SharedFormsModule],
  providers: [CalendarService],
})
export class DateControlsModule {}
