import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly URL = 'http://localhost:3102/products/';

  constructor(private http: HttpClient) {}

  public getProduits(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  public addProduit(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }
}
