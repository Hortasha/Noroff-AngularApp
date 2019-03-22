import { Component, Input } from '@angular/core';
import { CryptoModel } from 'src/app/models/crypto.model';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.scss']
})
export class CryptoCardComponent {
  @Input() crypto: CryptoModel;
  constructor() { }

}
