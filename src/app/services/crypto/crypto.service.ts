import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  getCrypto() {
    return this.http.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20');
  }
}