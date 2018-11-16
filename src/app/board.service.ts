import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor() { }

  @Output()
  drinkEmmiter: EventEmitter<any> = new EventEmitter();

  @Output()
  summaryEmmiter: EventEmitter<any> = new EventEmitter();

  addDrink(drink) {
    this.drinkEmmiter.emit(drink);
  }

  showSummary(summary) {
    this.summaryEmmiter.emit(summary);
  }

}
