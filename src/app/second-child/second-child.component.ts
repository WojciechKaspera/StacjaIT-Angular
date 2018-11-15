import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor(private communicateService: CommunicateService) { }

  messages = [];

  ngOnInit() {
    this.communicateService.communicate.subscribe(message => {
      this.messages.push(message);
    })
  }

}
