import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardHolder: string = "";
  @Input() cardNumber: string = "";
  @Input() cardExpMonth: string = "";
  @Input() cardExpYear: string = "";
  @Input() cardCvv: number = 0;

  constructor() { }

  ngOnInit(): void {
    console.log(this.cardHolder)
  }

}
