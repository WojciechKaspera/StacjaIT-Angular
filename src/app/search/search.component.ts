import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  results = [{name: 'tequilla sunrise', ingredients: ['cebula', 'ziemniaki', 'koperek'], imgSrc: 'https://www.thecocktaildb.com/images/media/drink/jfvyog1530108909.jpg'}];


  ngOnInit() {
  }

}
