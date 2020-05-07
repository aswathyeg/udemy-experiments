import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstAppComponent } from './my-first-app/my-first-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
