import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    AboutusComponent,
    SelectedLivreComponent,
    ListlivresComponent,
    PresentationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
