import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

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
@Input('alert-pop') message1='';//using alias
@Input()message=''//this variable can be accessed by the parent class with []
@Output()onSignup=new EventEmitter<any>();//this variable can be accessed by the parent class with ()
data:any={}
  constructor() { }

  ngOnInit() {
  }
  returnString(){
    return "string retured from function";
  }
  onClick(){
this.clickme='eventbinding';
  }
  showAlert(){
    alert(this.message1);
  }
  onSubmit(){
this.onSignup.emit(this.data)
  }
}
