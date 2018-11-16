import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private boardService: BoardService, private calculatorService: CalculatorService) { }

  showSummary = false;
  cost = '';
  ethanolMass = '';
  lethalDose = 500;
  drinkList = '';
  ingredients = [];

  ngOnInit() {
    this.boardService.summaryEmmiter.subscribe(chosenDrinks => {
      this.showSummary = true;
      this.drinkList = this.calculatorService.getDrinkList(chosenDrinks);
      this.ingredients = this.calculatorService.calculateIngredients(chosenDrinks);
      this.cost = this.calculatorService.calculateCost(this.ingredients);
      this.ethanolMass = this.calculatorService.calculateEthanolMass(this.ingredients);
    });
  }

}
