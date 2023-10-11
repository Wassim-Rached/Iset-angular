import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { QlqstableauxComponent } from './qlqstableaux/qlqstableaux.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    QlqstableauxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
