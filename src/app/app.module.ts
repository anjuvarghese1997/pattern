import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    CalculatorComponent,
    ListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
