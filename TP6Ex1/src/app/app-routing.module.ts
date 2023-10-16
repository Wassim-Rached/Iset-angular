import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentationComponent } from './components/presentation/presentation.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: 'presentation',
    title: 'presentation',
    component: PresentationComponent,
  },
  {
    path: 'livres',
    title: 'Liste de livres',
    component: ListlivresComponent,
  },
  {
    path: 'contact-us',
    title: 'a propos de Nous',
    component: AboutusComponent,
  },
  {
    path: 'livres/:id',
    title: 'selected livre',
    component: SelectedLivreComponent,
  },
  {
    path: '',
    redirectTo: 'presentation',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'not found',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
