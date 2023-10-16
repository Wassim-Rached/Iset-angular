import { Component, OnInit } from '@angular/core'
import { ProductService } from '../services/product.service'
import { Product } from '../model/product'

@Component({
    selector: 'app-listproducts',
    templateUrl: './listproducts.component.html',
    styleUrls: ['./listproducts.component.css'],
})
export class ListproductsComponent implements OnInit {
    public products: Product[] = []

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.products = this.productService.getProducts()
    }
}
