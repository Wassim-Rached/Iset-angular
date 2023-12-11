import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListcarsComponent } from './components/admin/listcars/listcars.component';
import { DetailcarComponent } from './components/admin/detailcar/detailcar.component';
import { UpdatecarComponent } from './components/admin/updatecar/updatecar.component';
import { MenuadminComponent } from './components/admin/menuadmin/menuadmin.component';
import { DashboardadminComponent } from './components/admin/dashboardadmin/dashboardadmin.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboarddirecteurComponent } from './components/Directeur/dashboarddirecteur/dashboarddirecteur.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';
import { CarComponent } from './components/admin/car/car.component';
import { MenudirecteurComponent } from './components/Directeur/menudirecteur/menudirecteur.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListcarsComponent,
    DetailcarComponent,
    UpdatecarComponent,
    MenuadminComponent,
    DashboardadminComponent,
    ErrorComponent,
    DashboarddirecteurComponent,
    AddcarComponent,
    AccueilComponent,
    CarComponent,
    MenudirecteurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
