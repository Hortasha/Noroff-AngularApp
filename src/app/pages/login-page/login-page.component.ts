import { Component, OnInit } from '@angular/core';
import { LoginResultModel } from 'src/app/models/login-result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginErrorMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(loginResult: LoginResultModel) {
    if(!loginResult.success) {
      this.loginErrorMessage = loginResult.message;
    } else {
      this.router.navigate(['/dashboard'])
    }
  }
}
