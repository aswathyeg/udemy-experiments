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
allowmyfirstapp=false;
clickme="not clicked";
username='';
names=[];
paragraph=false;


  //constructor() { setInterval(()=>{
    //this.allowmyfirstapp=true;},2000);

  //}
  
  ngOnInit() {
  }
  onClick(){
    
    this.clickme='clicked';
    this.names.push(this.username)
  }
  //reset(){
    //this.username=="''";
//}
onDisplay(){
  this.paragraph=!this.paragraph;
  this.names.push(this.names.length+1)
}
}
