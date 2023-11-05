import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

const URL = 'http://localhost:3000/produits';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  constructor(private http: HttpClient) {}

  public getProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(URL);
  }

  public addProduit(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(URL, produit);
  }
}
