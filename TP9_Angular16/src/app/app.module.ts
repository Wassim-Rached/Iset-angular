import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproductComponent } from './Application/components/addproduct/addproduct.component';
import { ListemployesComponent } from './EXERCICE/components/listemployes/listemployes.component';
import { EmployeComponent } from './EXERCICE/components/employe/employe.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    EmployeComponent,
    ListemployesComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
