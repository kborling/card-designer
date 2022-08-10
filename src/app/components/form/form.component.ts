import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  card: Card = {
    cardHolder: "",
    cardNumber: "",
    cardExpirationMonth: "",
    cardExpirationYear: "",
    cardCvv: undefined
  }

  @Output() cardHolderEvent = new EventEmitter<string>();
  @Output() cardNumberEvent = new EventEmitter<string>();
  @Output() cardExpMonthEvent = new EventEmitter<string>();
  @Output() cardExpYearEvent = new EventEmitter<string>();
  @Output() cardCvvEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    // console.log(f.value);  // { first: '', last: '' }
    // console.log(f.valid);  // false
  }

  updateCardHolder(value: string) {
    this.cardHolderEvent.emit(value)
  }
  updateCardNumber(value: string) {
    this.cardNumberEvent.emit(value)
  }
  updateCardExpMonth(value: string) {
    this.cardExpMonthEvent.emit(value)
  }
  updateCardExpYear(value: string) {
    this.cardExpYearEvent.emit(value)
  }
  updateCardCvv(value: number) {
    this.cardCvvEvent.emit(value)
  }
}
