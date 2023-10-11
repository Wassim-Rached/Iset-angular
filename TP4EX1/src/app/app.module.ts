import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPizzasComponent } from './list-pizzas/list-pizzas.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TestWaComponent } from './test-wa/test-wa.component';
import { TestWa2Component } from './test-wa2/test-wa2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizzasComponent,
    PizzaComponent,
    TestWaComponent,
    TestWa2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
