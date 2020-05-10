import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-app',
  templateUrl: './my-first-app.component.html',
  //inline template example
  //template:`<app-my-first-app></app-my-first-app>`
  
  styleUrls: ['./my-first-app.component.css']
  //inline style example
  // styles:`h1{color:blue}`
})
export class MyFirstAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
