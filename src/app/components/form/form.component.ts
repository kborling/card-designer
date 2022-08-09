import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  card: Card = {
    cardHolder: "Jane Appleseed",
    cardNumber: "4242 4242 2424 2424",
    cardExpirationMonth: "04",
    cardExpirationYear: "28",
    cardCvv: 123
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
