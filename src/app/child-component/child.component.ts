import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Output()
  chooseAnimal = new EventEmitter();

  onChange(selectedAnimal) {
    this.chooseAnimal.emit(this.imgSrcs[selectedAnimal]);
  }

  imgSrcs = {
    dog: {
      url: 'https://pbs.twimg.com/profile_images/1046968391389589507/_0r5bQLl_400x400.jpg',
      source: 'https://twitter.com/dog_feelings'
    },
    cat: {
      url: 'http://honesttopaws.com/wp-content/uploads/sites/5/2017/05/banana-cat-1.png', 
      source: 'http://honesttopaws.com'
    },
    hamster: {
      url: 'https://secure.i.telegraph.co.uk/multimedia/archive/03505/potd-hamster-bottl_3505743b.jpg',
      source: 'http://www.telegraph.co.uk'
    }
  }

  ngOnInit() {
  }

}
