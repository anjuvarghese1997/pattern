import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name1="STAR PATTERN"
  str=''
  pattern1(){
   
    let n=5
    let string =""
    
    for(let i=0;i<n;i++)
    {
      string += "* "
      console.log(string)
    }
   
  }

  name2=" REVERSE STAR PATTERN"
  pattern2(){
   
    let n = 5;
    let string = "";
    for (let i = 0; i < n; i++) {
      for (let k = 0; k < n - i; k++) {
        string += "*";
      }
      string += "\n";
    }
    console.log(string);
   
  }
  name3=" PASCAL STAR PATTERN"
pattern3(){
  let n = 6;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += "*";
    }
    string += "\n";
  } 
  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}


name4=" NUMBER TRIANGLE PATTERN "
pattern4() {
  let n = 8;
  let string = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      string += i * j + "  "
    }

    string += "\n";


  }
  console.log(string);
  

}

name5=" ALPHABET TRIANGLE PATTERN "
alphabetpattern() {
  let n = 7; 
  let string = "";
  let count = 0;
  // External loop
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      string += String.fromCharCode(count + 65);
      count++; 
    }
    string += "\n";
    string = string.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  }
  console.log(string);
}

}


