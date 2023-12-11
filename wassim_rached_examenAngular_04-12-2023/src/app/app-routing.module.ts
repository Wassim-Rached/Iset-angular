import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './components/erreur/erreur.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListpaysComponent } from './components/listpays/listpays.component';
import { DashpaysComponent } from './components/dashpays/dashpays.component';
import { SelectedpaysComponent } from './components/selectedpays/selectedpays.component';
import { ModifpaysComponent } from './components/modifpays/modifpays.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Accueil', component: HomeComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  {
    path: 'countries',
    component: DashpaysComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', title: 'Liste des pays', component: ListpaysComponent },
      {
        path: 'update',
        title: 'Mise à jour des pays',
        component: ModifpaysComponent,
      },
      {
        path: ':continent',
        title: 'Liste des pays par continent',
        component: SelectedpaysComponent,
      },
    ],
  },
  { path: '**', title: 'Erreur', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
