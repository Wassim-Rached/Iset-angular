import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenupublicComponent } from './composants/public/menupublic/menupublic.component';
import { DashboardPublicComponent } from './composants/public/dashboard-public/dashboard-public.component';
import { InstitutComponent } from './composants/public/institut/institut.component';
import { ListdepsComponent } from './composants/public/deps/listdeps/listdeps.component';
import { TiComponent } from './composants/public/deps/ti/ti.component';
import { SegComponent } from './composants/public/deps/seg/seg.component';
import { NouveautesComponent } from './composants/public/nouveautes/nouveautes.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { LoginComponent } from './composants/login/login.component';
import { CoursComponent } from './composants/prof/cours/cours.component';
import { MessagesComponent } from './composants/prof/messages/messages.component';
import { EmploisComponent } from './composants/etud/emplois/emplois.component';
import { InfosComponent } from './composants/etud/infos/infos.component';
import { DashEtudComponent } from './composants/etud/dash-etud/dash-etud.component';
import { MenuetudComponent } from './composants/etud/menuetud/menuetud.component';
import { MenuprofComponent } from './composants/prof/menuprof/menuprof.component';
import { DashProfComponent } from './composants/prof/dash-prof/dash-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    MenupublicComponent,
    DashboardPublicComponent,
    InstitutComponent,
    ListdepsComponent,
    TiComponent,
    SegComponent,
    NouveautesComponent,
    FormationComponent,
    ErreurComponent,
    LoginComponent,
    CoursComponent,
    MessagesComponent,
    EmploisComponent,
    InfosComponent,
    DashEtudComponent,
    MenuetudComponent,
    MenuprofComponent,
    DashProfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
