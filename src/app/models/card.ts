export interface Card {
  cardHolder: string;
  cardNumber: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardCvv?: number;
}
