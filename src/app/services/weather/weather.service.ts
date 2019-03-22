import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/862592/');
  }
}
