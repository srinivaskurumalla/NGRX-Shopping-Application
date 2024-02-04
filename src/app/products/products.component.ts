import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, inject } from '@angular/core';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { Observable } from 'rxjs';
import { IProduct } from '../shared/models/product.interface';
import { ProductAPIService } from '../shared/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.actions';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  http = inject(HttpClient);
  productApi = inject(ProductAPIService);
  products$ = this.productApi.getProducts() as Observable<IProduct[]>;
  //products$ = this.http.get('https://fakestoreapi.com/products') as Observable<IProduct[]>;

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) { }
  ngOnInit(): void {
    this.productApi.getProducts().subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  AddItemToCart(product: IProduct) {
    this.store.dispatch(addToCart({ product }))
  }
}
