import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  servername='';
  servercontent='';
  serverElements=[];
 // content='';
  constructor() { }

  ngOnInit() {
  }
  onAddserver(){

this.serverElements.push({
  type:'server',
  name:this.servername,
  content:this.servercontent

});
  }

  onAddserverblueprint(){
    this.serverElements.push({
      type:'blueprint',
      name:this.servername,
      content:this.servercontent
    
    });

  }

}
