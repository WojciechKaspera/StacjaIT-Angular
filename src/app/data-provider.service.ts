import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('turbo-data');
      }, 2000)
    })
  }

  constructor() { }
}
