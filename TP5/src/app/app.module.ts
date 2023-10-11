import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListemployesComponent } from './listemployes/listemployes.component';
import { SuppemployesComponent } from './suppemployes/suppemployes.component';
import { VoitureComponent } from './EX/components/voiture/voiture.component';
import { ListvoituresComponent } from './EX/components/listvoitures/listvoitures.component';
import { InfosvoituresComponent } from './EX/components/infosvoitures/infosvoitures.component';

@NgModule({
  declarations: [
    AppComponent,
    ListemployesComponent,
    SuppemployesComponent,
    VoitureComponent,
    ListvoituresComponent,
    InfosvoituresComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
