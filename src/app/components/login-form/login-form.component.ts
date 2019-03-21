import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoginResultModel } from 'src/app/models/login-result.model';
import { AccountModel } from 'src/app/models/account.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() onLoginUser: EventEmitter<LoginResultModel>;
  form: FormGroup;

  constructor(private authService: AuthService) {
    this.onLoginUser = new EventEmitter<LoginResultModel>();
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  onLogin(formValues: AccountModel) {
    if(this.authService.login(formValues.username, formValues.password)) {

      this.authService.startSession();

      this.onLoginUser.emit({
        success: true
      })
    } else {
      this.onLoginUser.emit({
        success: false,
        message: 'Login info is incorrect'
      })
    }
  }
}
