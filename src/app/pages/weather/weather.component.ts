import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
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
      .getWeatherForecastByCoordinates(39.113014, -105.358887)
      .subscribe((val) => {
        console.log(val);
      });
  }

  getWeatherIcon(iconId: string, night = false): string {
    return `http://openweathermap.org/img/wn/${iconId}${
      night ? 'n' : 'd'
    }@2x.png`;
  }
}
