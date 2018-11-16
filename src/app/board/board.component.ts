import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
 
  constructor(private boardService: BoardService) { }

  chosenDrinks = [];

  sumUp() {
    if (this.chosenDrinks.length > 0) {
      this.boardService.showSummary(this.chosenDrinks);
      const summarySection = document.getElementsByClassName('summary-section')[0];
      const summarySectionYPosition = summarySection.getBoundingClientRect().top + window.scrollY;
      this.scroll(summarySectionYPosition- 50)
    }
  }

  scroll(position) {
    let currentPosition = window.scrollY;
    const scrollInterval = setInterval(() => {
      if (currentPosition < position) {
        currentPosition += 5;
        window.scrollTo(0, currentPosition);
      } else {
        clearInterval(scrollInterval);
      }
    }, 5)
  }

  increaseQuantity(drink) {
      drink.quantity++;
  }

  decreaseQuantity(drink) {
    if (drink.quantity > 1) {
      drink.quantity--;
    } else {
      let drinkIndex;
      this.chosenDrinks.map((choosenDrink, index) => {
        if (choosenDrink.name === drink.name) {
          drinkIndex = index;
        }
      });
    this.chosenDrinks.splice(drinkIndex, 1);
    }
  }

  ngOnInit() {
    this.boardService.drinkEmmiter.subscribe((newDrink) => {
      let isNew = true;
      this.chosenDrinks.map(drink => {
        if (drink.name === newDrink.name) {
          drink.quantity++;
          isNew = false;
        }
      });
      if (isNew) {
        newDrink.quantity = 1;
        this.chosenDrinks.push(newDrink);
      }
    });
  }

}
