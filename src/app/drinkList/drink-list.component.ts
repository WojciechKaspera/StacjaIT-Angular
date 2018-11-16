import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  constructor(private boardService: BoardService) { }

  drinkList = [
    {name: 'Tequilla Sunrise', ingredients: [{name: 'Tequilla', volume: 40, pricePerUnit: 0.11, ethanolPercentage: 40}, {name: 'Orange juice', volume: 100, pricePerUnit: 0.005}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'},
    {name: 'Gin & Tonic', ingredients: [{name: 'Gin', volume: 50, pricePerUnit: 0.07, ethanolPercentage: 40}, {name: 'Tonic', volume: 100, pricePerUnit: 0.006}], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'}  
  ];

  addDrink(drinkName) {
    this.drinkList.map(drink => {
      if (drink.name === drinkName) {
        this.boardService.addDrink(drink);
      }
    });
  }

  ngOnInit() {
  }

}
