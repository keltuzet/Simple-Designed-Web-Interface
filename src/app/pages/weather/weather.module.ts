import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { API_URL } from '@shared/services';
import { WeatherCardComponent } from './components';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [WeatherComponent, WeatherCardComponent],
  imports: [CommonModule, WeatherRoutingModule],
  providers: [
    WeatherService,
    {
      provide: API_URL,
      useValue: 'http://api.openweathermap.org/data/2.5',
    },
  ],
})
export class WeatherModule {}
