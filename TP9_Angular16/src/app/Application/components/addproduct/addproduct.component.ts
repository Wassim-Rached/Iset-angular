import { Component, OnInit } from '@angular/core';
import { Category } from '../../enum/category';

import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
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
  productForm!: FormGroup;
  lesPointsVente!: FormArray;

  // productForm = new FormGroup({
  //   id: new FormControl(1, { nonNullable: true }),
  //   libelle: new FormControl('', { nonNullable: true }),
  //   prix: new FormControl(0, { nonNullable: true }),
  //   madeIn: new FormControl('Tunisie', { nonNullable: true }),
  //   categorie: new FormControl(Category.Accessoires, { nonNullable: true }),
  //   nouveau: new FormControl(false, { nonNullable: true }),
  // });

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {}

  onSubmitForm() {
    this.productService
      .addProduit(this.productForm.value)
      .subscribe((produit) => {
        this.lesproduits.push(produit);
      });
  }

  onResetForm() {
    this.productForm.reset();
    this.productForm.get('madeIn')?.setValue('Autre');
    this.productForm.get('categorie')?.setValue(Category.Fourniture);
  }

  onAjouter() {
    this.lesPointsVente.push(this.formBuilder.control(''));
  }

  onVider() {
    this.lesPointsVente.clear();
  }

  ngOnInit(): void {
    this.lesPointsVente = this.formBuilder.array([]);

    this.productForm = this.formBuilder.nonNullable.group({
      id: [1],
      libelle: [''],
      prix: [0],
      madeIn: ['Tunisie'],
      categorie: [Category.Accessoires],
      nouveau: [true],
      pointsVente: this.lesPointsVente,
    });

    this.productForm.get('nouveau')?.setValue(false);

    this.productForm.get('libelle')?.valueChanges.subscribe((data) => {
      console.log(data);
    });

    this.productService.getProduits().subscribe({
      next: (produits) => {
        this.lesproduits = produits;
      },
    });
  }
}
