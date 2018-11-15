import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  awesomeVariable = 'Awesome value';
  awesomeVariable2 = 'Another awesome value'
  myLovelyInputValue = '';
  chosenColor = '';
  ngIfVariable = true;
  ngClassVariable = 'small';
  ngForArray = ['krzesło', 'siekierka', 'motyka'];
  ngSwitchVariable = 'default';

  onClick() {
    console.log('Klikam w button!');
  }

  onKeyUp(event) {
    console.log(event.key);
  }

  onKeyUp2(value) {
    console.log(value);
  }
}
