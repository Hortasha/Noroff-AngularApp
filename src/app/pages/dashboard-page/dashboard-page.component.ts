import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherModel } from 'src/app/models/weather.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  weatherData: WeatherModel[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.displayWeather();
  }

  displayWeather() {
    const allWeather: WeatherModel[] = [];
    this.weatherService.getWeather().subscribe((response:any) => {
      for(let i = 0; i < response.consolidated_weather.length; i++) {
        let weather: WeatherModel = {
          temprature: response.consolidated_weather[i].the_temp,
          state: response.consolidated_weather[i].weather_state_name,
          windDirection: response.consolidated_weather[i].wind_direction,
          humidity: response.consolidated_weather[i].humidity
        }
        allWeather.push(weather);
      }
      this.weatherData = allWeather;
      
    }, error => {
      console.error(error);
    })
  }
}
