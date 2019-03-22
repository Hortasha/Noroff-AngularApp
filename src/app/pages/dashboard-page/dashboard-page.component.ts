import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather/weather.service';
import { WeatherModel } from 'src/app/models/weather.model';
import { JobService } from 'src/app/services/job/job.service';
import { JobModel } from 'src/app/models/job.model';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { CryptoModel } from 'src/app/models/crypto.model';
import { CryptoService } from 'src/app/services/crypto/crypto.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {

  //Data
  weatherData: WeatherModel[] = [];
  jobsData: JobModel[] = [];
  pokemonsData: PokemonModel[] = [];
  cryptoData: CryptoModel[] = []

  //Show
  display: string = '';


  constructor(
    private weatherService: WeatherService,
    private jobService: JobService,
    private pokemonService: PokemonService,
    private cryptoService: CryptoService
  ) { }

  displayWeather() {

    this.display = 'weather';

    if(this.weatherData.length === 0) {
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

  displayJobs() {

    this.display = 'jobs';

    if(this.jobsData.length === 0) {
      const allJobs: JobModel[] = [];
      this.jobService.getJobs().subscribe((response:any) => {

        for(let i = 0; i < response.length; i++) {
          let job: JobModel = {
            company: response[i].company,
            logo: response[i].company_logo,
            location: response[i].location,
            type: response[i].type,
            url: response[i].url
          }
          allJobs.push(job);
        }
        this.jobsData = allJobs;
      }, error => {
        console.error(error);
      })
    }
  }

  displayPokemons() {
    
    this.display = 'pokemons';

    if(this.pokemonsData.length === 0) {
      const allPokemons: PokemonModel[] = [];
      this.pokemonService.getPokemons().subscribe((response:any) => {

        for(let i = 0; i < response.results.length; i++) {
          let pokemon: PokemonModel = {
            id: i+1,
            name: response.results[i].name,
            img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+(i+1)+'.png'
          }
          allPokemons.push(pokemon);
        }
        this.pokemonsData = allPokemons;
      }, error => {
        console.error(error);
      })
    }
  }

  displayCrypto() {
        
    this.display = 'crypto';

    if(this.cryptoData.length === 0) {
      const allCrypto: CryptoModel[] = [];
      this.cryptoService.getCrypto().subscribe((response:any) => {

        for(let i = 0; i < response.length; i++) {
          let crypto: CryptoModel = {
            name: response[i].id,
            price: response[i].current_price,
            dayChange: response[i].price_change_24h,
            image: response[i].image
          }
          allCrypto.push(crypto);
        }
        this.cryptoData = allCrypto;
      }, error => {
        console.error(error);
      })
    }
  }
}