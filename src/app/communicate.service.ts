import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  @Output()
  communicate = new EventEmitter();

  sendMessage(message) {
    this.communicate.emit(message);
  }

  constructor() { }

}
