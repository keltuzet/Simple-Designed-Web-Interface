import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PWFModel } from './models';
import { LocationService, WeatherService } from './services';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  forecast: PWFModel;
  $subscriptions: Subscription[] = [];

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.getWeatherForecast();

    this.weatherService
      .getCurrentWeatherByCityName('London', '', '')
      .subscribe((val) => {
        console.log(val);
      });

    this.weatherService
      .getCurrentWeatherForRectangleZone(12, 32, 15, 37, 10)
      .subscribe((val) => {
        console.log(val);
      });

    this.weatherService
      .getCurrentWeatherForCircleZone(15.5, 37.5, 20)
      .subscribe((val) => {
        console.log(val);
      });

    this.weatherService
      .getWeatherForecastByCoordinates(42.8476501, 74.5814659)
      .subscribe((val) => {
        console.log(val);
      });

    this.locationService.getСoordinates().subscribe((vl) => {
      console.log(vl);
    });
  }

  ngOnDestroy(): void {
    this.$subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }

  getWeatherIcon(iconId: string, night = false): string {
    return `http://openweathermap.org/img/wn/${iconId}${
      night ? 'n' : 'd'
    }@2x.png`;
  }

  getWeatherForecast(): void {
    this.$subscriptions.push(
      this.locationService.getСoordinates().subscribe((coordinates) => {
        this.$subscriptions.push(
          this.weatherService
            .getWeatherForecastByCoordinates(coordinates.lat, coordinates.lon)
            .subscribe((forecast) => {
              this.forecast = forecast;
            })
        );
      })
    );
  }
}
