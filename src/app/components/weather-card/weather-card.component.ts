import { Component, Input } from '@angular/core';
import { WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weather: WeatherModel;

  constructor() { }

}
