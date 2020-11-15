import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { environment } from '@environments/environment';
import { API_URL } from '@shared/services';
import { LocalDateModule } from '@shared/pipes';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { WeatherService, LocationService } from './services';
import { WeatherCardComponent } from './components';
import { UnitPipe } from './pipes';

@NgModule({
  declarations: [WeatherComponent, WeatherCardComponent, UnitPipe],
  imports: [CommonModule, WeatherRoutingModule, LocalDateModule],
  providers: [
    WeatherService,
    LocationService,
    AsyncPipe,
    {
      provide: API_URL,
      useValue: environment.weatherApi,
    },
  ],
})
export class WeatherModule {}
