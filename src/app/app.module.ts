import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirstAppComponent } from './my-first-app/my-first-app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { InterpolationComponent } from './databinding-alltypes/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstAppComponent,
    DatabindingComponent,
    ServerElementComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
