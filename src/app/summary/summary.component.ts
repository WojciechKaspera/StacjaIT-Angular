import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  cost = 500;
  ethanolMass = 200;
  lethalDose = 500;
  // gestosc alkoholu 0.789

  drinkList = ['5 x tequilla sunrise', '2x vodka with tonic'];
  ingredients = [
    {
      id: 'tequilla',
    fullName: 'Tequilla',
    volume: 500
  },
  {
    id: 'orangeJuice',
    fullName: 'Orange juice',
    volume: 500
  },
  {
    id: 'vodka',
    fullName: 'Vodka',
    volume: 200
  },
  {
    id: 'limon',
    fullName: 'Limon',
    quantity: 5
  }
  ];

  constructor() { }

  ngOnInit() {
  }

}
