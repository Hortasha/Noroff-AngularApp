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

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    DashboardPageComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
