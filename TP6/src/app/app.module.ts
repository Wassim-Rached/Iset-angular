import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './application/home/home.component'
import { ListproductsComponent } from './application/listproducts/listproducts.component'
import { ContactComponent } from './application/contact/contact.component'
import { Error404Component } from './application/error404/error404.component'
import { MenuComponent } from './application/menu/menu.component'
import { SelectedproductComponent } from './application/selectedproduct/selectedproduct.component'

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListproductsComponent,
        ContactComponent,
        Error404Component,
        MenuComponent,
        SelectedproductComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
