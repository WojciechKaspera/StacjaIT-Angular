import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { CommunicateService } from '../communicate.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private communicateService: CommunicateService) { }

  onKeyUp(keyEvent, input) {
    if (keyEvent.keyCode === 13) {
      this.communicateService.sendMessage(input.value);
      input.value = '';
    }
  }

  ngOnInit() {
  }

}
