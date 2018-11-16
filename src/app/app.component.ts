import { Component, OnInit } from '@angular/core';
import { DataProviderService } from './data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private dataProvider: DataProviderService) {

  }

  data = '';

  ngOnInit() {
    this.dataProvider.getData().then(incomingData => {
      this.data = incomingData;
    });
  }

}
