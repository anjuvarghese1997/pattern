import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  list() {
    var digits = 1234665;
    var last2 = String(digits).slice(-2);
    console.log(last2);

  }

  array = [1, 3, 1, 3, 2];
  s = 0;
  sum() {
    for (let i = 0; i < this.array.length; i++) {
      this.s += this.array[i]
    }
    console.log("sum is :" + this.s);
  }



}
