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


  constructor() { setInterval(()=>{
    this.allowmyfirstapp=true;},2000);

  }
  
  ngOnInit() {
  }
  onClick(){
    
    this.clickme='clicked';
  }
  //reset(){
    //this.username=="''";
//}
}
