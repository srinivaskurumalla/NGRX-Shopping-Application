import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from './models/product.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  http = inject(HttpClient)
  constructor() { }
  getProducts(){
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products')
    .pipe(
      map(((products) => {
        return products.map((product) => {
          return {...product,quantity:1}
        })
      }))
    )
  }
}
