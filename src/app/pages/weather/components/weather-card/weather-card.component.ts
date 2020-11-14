import { Component, Input, OnInit } from '@angular/core';
import { PWFModel } from '@pages/weather/models';

export interface WeatherCharactModel {
  icon: any;
  charact: string;
  value: string | number;
  unitType?: any;
}

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {
  @Input() forecast: PWFModel;
  date = Date.now();

  get weatherCharacts(): WeatherCharactModel[] {
    const { current: forecast } = this.forecast;
    return [{
      icon: 'asd',
      charact: 'asd',
      value: forecast.wind_speed
    }];
  }

  constructor() { }

  ngOnInit(): void {
  }

  getWeatherIcon(iconId: string): string {
    return `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  }
}
