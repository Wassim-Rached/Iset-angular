import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpersonnesComponent } from './listpersonnes/listpersonnes.component';
import { PersonneComponent } from './personne/personne.component';
import { UnepersonneComponent } from './unepersonne/unepersonne.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpersonnesComponent,
    PersonneComponent,
    UnepersonneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
