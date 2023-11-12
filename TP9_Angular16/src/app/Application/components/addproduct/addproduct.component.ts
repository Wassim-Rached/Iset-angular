import { Component, OnInit } from '@angular/core';
import { Category } from '../../enum/category';

import { FormGroup, FormControl } from '@angular/forms';
import { Product } from '../../classes/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  lescategories = Object.values(Category);
  lesproduits: Product[] = [];

  constructor(private productService: ProductService) {}

  productForm = new FormGroup({
    id: new FormControl(1, { nonNullable: true }),
    libelle: new FormControl('', { nonNullable: true }),
    prix: new FormControl(0, { nonNullable: true }),
    madeIn: new FormControl('Tunisie', { nonNullable: true }),
    categorie: new FormControl(Category.Accessoires, { nonNullable: true }),
    nouveau: new FormControl(false, { nonNullable: true }),
  });

  onSubmitForm() {
    const newProduct: Product = this.productForm.value as Product;
    this.productService.addProduit(newProduct).subscribe((produit) => {
      this.lesproduits.push(produit);
    });
  }

  onResetForm() {
    this.productForm.reset();
  }

  ngOnInit(): void {
    this.productService.getProduits().subscribe({
      next: (produits) => {
        this.lesproduits = produits;
      },
    });
  }
}
