import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ListparcsComponent } from './EXERCICE/composants/listparcs/listparcs.component';
import { SelectedParcComponent } from './EXERCICE/composants/selected-parc/selected-parc.component';
import { ErreurComponent } from './EXERCICE/composants/erreur/erreur.component';
import { ParcComponent } from './EXERCICE/composants/parc/parc.component';

@NgModule({
  declarations: [AppComponent, ProduitsComponent, ListparcsComponent, SelectedParcComponent, ErreurComponent, ParcComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
