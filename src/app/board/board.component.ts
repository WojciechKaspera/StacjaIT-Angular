import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  chosenDrinks = [{
    name: 'tequilla sunrise',
    ingredients: ['cebula', 'ziemniaki', 'koperek'],
    imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg',
    quantity: 1
  }];

  increaseQuantity(drink) {
      drink.quantity++;
  }

  decreaseQuantity(drink) {
    if (drink.quantity > 1) {
      drink.quantity--;
    } else {
      this.chosenDrinks = this.chosenDrinks.filter(theDrink => {
        if (theDrink.name === drink.name) {
          return false;
        }
      })
    }
  }

  ngOnInit() {
  }

}
