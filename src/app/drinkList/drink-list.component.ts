import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  constructor(private boardService: BoardService, private dataProvider: DataProviderService) { }

  drinkList = [];

  addDrink(drinkName) {
    this.drinkList.map(drink => {
      if (drink.name === drinkName) {
        this.boardService.addDrink(drink);
      }
    });
  }

  ngOnInit() {
    this.drinkList = this.dataProvider.getDrinkList();
  }

}
