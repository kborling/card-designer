import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'interactive-card-details';
  cardHolder = 'Jane Appleseed';
  cardNumber = '4242 4242 4242 4242';
  cardExpMonth = '06';
  cardExpYear = '28';
  cardCvv = 123;

  updateCardHolder(value: string) {
    this.cardHolder = value;
  }
  updateCardNumber(value: string) {
    this.cardNumber = value;
  }
  updateCardExpMonth(value: string) {
    this.cardExpMonth = value;
  }
  updateCardExpYear(value: string) {
    this.cardExpYear = value;
  }
  updateCardCvv(value: number) {
    this.cardCvv = value;
  }
}
