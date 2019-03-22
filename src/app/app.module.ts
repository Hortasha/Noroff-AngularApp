import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthService } from './services/auth/auth.service';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { WeatherService } from './services/weather/weather.service';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCardComponent } from './components/job-card/job-card.component';
import { JobService } from './services/job/job.service';
import { PokemonService } from './services/pokemon/pokemon.service';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { CryptoService } from './services/crypto/crypto.service';
import { CryptoCardComponent } from './components/crypto-card/crypto-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    DashboardPageComponent,
    WeatherCardComponent,
    JobCardComponent,
    PokemonCardComponent,
    CryptoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, WeatherService, JobService, PokemonService, CryptoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
