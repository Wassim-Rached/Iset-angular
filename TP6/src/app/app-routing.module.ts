import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './application/home/home.component'
import { ListproductsComponent } from './application/listproducts/listproducts.component'
import { ContactComponent } from './application/contact/contact.component'
import { Error404Component } from './application/error404/error404.component'
import { SelectedproductComponent } from './application/selectedproduct/selectedproduct.component'

const routes: Routes = [
    { path: 'accueil', title: 'Accueil', component: HomeComponent },
    { path: 'produits', title: 'Liste des produits', component: ListproductsComponent },
    { path: 'contact', title: 'Contact', component: ContactComponent },
    { path: 'produits/:identif', title: 'Produit choisi', component: SelectedproductComponent },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', title: 'error', component: Error404Component },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
