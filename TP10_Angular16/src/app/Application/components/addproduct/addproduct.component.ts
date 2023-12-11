import { Component, OnInit } from '@angular/core';
import { Category } from '../../enum/category';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../classes/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  lescategories = Object.values(Category);
  /*productForm = new FormGroup({
    id: new FormControl(1, {nonNullable:true}),
    libelle: new FormControl('', {nonNullable:true}),
    prix: new FormControl(0, {nonNullable:true}),
    madeIn:new FormControl('Tunisie', {nonNullable:true}),
    categorie: new FormControl(Category.Accessoires, {nonNullable:true}),
    nouveau:new FormControl(false, {nonNullable:true})
  }) 
*/

  lesProduits!: Product[];
  productForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.lesProduits = data));

    this.productForm = this.fb.nonNullable.group({
      id: [0, Validators.required],
      libelle: [
        'Stylo',
        [Validators.required, Validators.pattern('[A-Z][a-zA-Z]+$')],
      ],
      prix: [0, [Validators.required, Validators.min(0.1)]],
      madeIn: ['Tunisie'],
      categorie: [Category.Accessoires],
      nouveau: [true],
      pointsVente: this.fb.array([]),
    });
    this.productForm.get('nouveau')?.setValue(false);
    this.productForm
      .get('libelle')
      ?.valueChanges.subscribe((data) => console.log(data));
  }

  onSubmitForm() {
    console.log(this.productForm.value);
    console.log(this.productForm.get('id')?.value);
    console.log(this.productForm.controls['libelle'].value);
    console.log(this.productForm.value['madeIn']);

    this.productService
      .addProduct(this.productForm.value)
      .subscribe((data) => this.lesProduits.push(data));
  }

  onResetForm() {
    this.productForm.reset({ categorie: Category.Fourniture, madeIn: 'Autre' });
    this.lesPointsVente.clear();
  }

  public get lesPointsVente() {
    return this.productForm.get('pointsVente') as FormArray;
  }

  onAjouter() {
    this.lesPointsVente.push(this.fb.control('', Validators.minLength(2)));
    // Autre possibilité
    // this.lesPointsVente.push(new FormControl(''))
  }

  public get idProduct() {
    return this.productForm.get('id');
  }

  public get libProduct() {
    return this.productForm.get('libelle');
  }

  public get pointVente() {
    return this.productForm.get('pointsVente') as FormArray;
  }

  isInvalidPointVente(i: number) {
    return (
      this.pointVente?.controls[i]?.errors?.['minlength'] &&
      this.pointVente.controls[i].touched
    );
  }

  isValidPattern() {
    return this.libProduct?.errors?.['pattern'] && this.libProduct?.touched;
  }

  isInvalidRequiredLibele() {
    return (
      this.productForm.get('libelle')?.errors?.['required'] &&
      this.productForm.get('libelle')?.touched
    );
  }
}
