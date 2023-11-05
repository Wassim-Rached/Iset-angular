import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListparcsComponent } from './EXERCICE/composants/listparcs/listparcs.component';
import { ErreurComponent } from './EXERCICE/composants/erreur/erreur.component';
import { SelectedParcComponent } from './EXERCICE/composants/selected-parc/selected-parc.component';

const routes: Routes = [
  {
    path: 'parcs',
    children: [
      {
        path: '',
        title: 'liste de parcs',
        component: ListparcsComponent,
      },

      {
        path: ':parcId',
        title: 'Selected parc',
        component: SelectedParcComponent,
      },
    ],
  },
  { path: '', redirectTo: '/parcs', pathMatch: 'full' },
  { path: '**', title: 'ERROR 404!', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
