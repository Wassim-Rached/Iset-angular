import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { Observable } from 'rxjs';

const URL="http://localhost:3000/products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }

  public addProduct(p:Product): Observable<Product>{
    return this.http.post<Product>(URL, p);
  }

}
