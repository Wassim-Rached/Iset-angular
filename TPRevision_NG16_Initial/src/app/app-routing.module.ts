import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardadminComponent } from './components/admin/dashboardadmin/dashboardadmin.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';
import { ListcarsComponent } from './components/admin/listcars/listcars.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { DashboarddirecteurComponent } from './components/Directeur/dashboarddirecteur/dashboarddirecteur.component';
import { authAdminGuard } from './guards/auth-admin.guard';
import { authDirGuard } from './guards/auth-dir.guard';

const routes: Routes = [
  { path: 'login', title: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'admin',
    title: 'admin',
    component: DashboardadminComponent,
    children: [
      { path: 'acceuil', title: 'acceuil', component: AccueilComponent },
      { path: 'cars', title: 'voitures', component: ListcarsComponent },
      { path: 'addcar', title: 'ajout voiture', component: AddcarComponent },
    ],
    canActivate: [authAdminGuard],
  },
  {
    path: 'directeur',
    title: 'Directeur',
    component: DashboarddirecteurComponent,
    canActivate: [authDirGuard],
  },
  { path: '**', title: 'erreur', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
