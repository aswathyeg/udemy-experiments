import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-examples';
  elments=[{title:'server',name:'Testserver',content:'Just a test!'}];
  val='This is a alert message'
  
}
