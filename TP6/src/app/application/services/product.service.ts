import { Injectable } from '@angular/core'
import { Product } from '../model/product'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private lesProduits: Product[] = [
        new Product(32, 'trousse', 14.2),
        new Product(47, 'stylo', 0.6),
        new Product(51, 'cartable', 67.2),
        new Product(64, 'tablier', 24.8),
    ]

    getProducts() {
        return this.lesProduits
    }
}
