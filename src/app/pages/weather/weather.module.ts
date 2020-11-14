import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@environments/environment';
import { API_URL } from '@shared/services';
import { WeatherCardComponent } from './components';
import { WeatherService, LocationService } from './services';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { LocalDateModule } from '@shared/pipes';

@NgModule({
  declarations: [WeatherComponent, WeatherCardComponent],
  imports: [CommonModule, WeatherRoutingModule, LocalDateModule],
  providers: [
    WeatherService,
    LocationService,
    {
      provide: API_URL,
      useValue: environment.weatherApi,
    },
  ],
})
export class WeatherModule {}
