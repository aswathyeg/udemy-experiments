import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
value=10;
today=new Date();
clickme='';
text='';
  constructor() { }

  ngOnInit() {
  }
  returnString(){
    return "string retured from function";
  }
  onClick(){
this.clickme='eventbinding';
  }
}
