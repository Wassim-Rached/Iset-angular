import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit';
import { ProduitService } from '../services/produit.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  lesProduits: Produit[] = [];
  lesProduits$!: Observable<Produit[]>;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.getProduits().subscribe((produits) => {
      this.lesProduits = produits;
    });
    this.lesProduits$ = this.produitService.getProduits();
  }

  onAjouter() {
    const randomId = Math.floor(Math.random() * 1000);
    const produit = new Produit(randomId, 'trousse', 10);
    this.produitService.addProduit(produit).subscribe((produit) => {
      this.lesProduits.push(produit);
      this.lesProduits$ = this.produitService.getProduits();
    });
  }
}
