import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { NouveautesComponent } from './composants/public/nouveautes/nouveautes.component';
import { InstitutComponent } from './composants/public/institut/institut.component';
import { FormationComponent } from './composants/public/formation/formation.component';
import { ListdepsComponent } from './composants/public/deps/listdeps/listdeps.component';
import { TiComponent } from './composants/public/deps/ti/ti.component';
import { SegComponent } from './composants/public/deps/seg/seg.component';
import { DashboardPublicComponent } from './composants/public/dashboard-public/dashboard-public.component';
import { DashEtudComponent } from './composants/etud/dash-etud/dash-etud.component';
import { DashProfComponent } from './composants/prof/dash-prof/dash-prof.component';
import { InfosComponent } from './composants/etud/infos/infos.component';
import { EmploisComponent } from './composants/etud/emplois/emplois.component';
import { CoursComponent } from './composants/prof/cours/cours.component';
import { MessagesComponent } from './composants/prof/messages/messages.component';
import { LoginComponent } from './composants/login/login.component';
import { etudGuard } from './guards/etud.guard';
import { profGuard } from './guards/prof.guard';

const routes: Routes = [
  // public
  {
    path: '',
    component: DashboardPublicComponent,
    children: [
      { path: '', redirectTo: 'nouveautes', pathMatch: 'full' },
      {
        path: 'nouveautes',
        title: 'nouveautes',
        component: NouveautesComponent,
      },
      { path: 'institut', title: 'institut', component: InstitutComponent },
      {
        path: 'deps',
        component: ListdepsComponent,
        children: [
          { path: 'ti', title: 'Dep ti', component: TiComponent },
          { path: 'seg', title: 'Dep seg', component: SegComponent },
          { path: '', redirectTo: 'ti', pathMatch: 'full' },
        ],
      },
      { path: 'formation', title: 'formation', component: FormationComponent },
    ],
  },

  // Etudiant
  {
    path: 'etud',
    title: '',
    component: DashEtudComponent,
    children: [
      { path: '', redirectTo: 'infos', pathMatch: 'full' },
      { path: 'infos', title: 'Information', component: InfosComponent },
      { path: 'emplois', title: 'Emplois', component: EmploisComponent },
    ],
    canActivate: [etudGuard],
  },

  // Prof
  {
    path: 'prof',
    title: '',
    component: DashProfComponent,
    children: [
      { path: '', redirectTo: 'cours', pathMatch: 'full' },
      { path: 'cours', title: '', component: CoursComponent },
      { path: 'messages', component: MessagesComponent },
    ],
    canActivate: [profGuard],
  },

  //
  { path: 'extranet', title: 'Extranet', component: LoginComponent },

  //
  { path: '**', title: 'Error 404', component: ErreurComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
