import { Injectable } from '@angular/core';
import { MOCK_ACCOUNT } from './../../account.mock';
import { AccountModel } from 'src/app/models/account.model';
import { LoginResultModel } from 'src/app/models/login-result.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private account: AccountModel = MOCK_ACCOUNT;
  private autherized: LoginResultModel = {
    success: false
  }

  constructor() {

  }

  getAccount() {
    return this.account;
  }

  isAuthorized() {
    return window.localStorage.getItem('token');
  }

  login(username:string, password:string) {
    return username === this.account.username && password === this.account.password;
  }

  startSession() {
    window.localStorage.setItem('token', 'Sl9123jL#!lkajds)8');
  }
}