import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {
    if(this.authService.isAuthorized()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login'])
    }
  }
}
