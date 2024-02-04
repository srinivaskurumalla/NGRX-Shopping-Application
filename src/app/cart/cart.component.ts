import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { selectCartProducts, selectTotal } from '../states/cart/cart.selector';
import { CommonModule } from '@angular/common';
import { decrementProduct, incrementProduct, removeItem } from '../states/cart/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  cartItems$ = this.store.select(selectCartProducts)
  totalPrice$ = this.store.select(selectTotal)
  constructor(private store: Store<AppState>) { }

  remove(productId:number){
    debugger
    this.store.dispatch(removeItem({productId}))
  }
  increment(productId:number){
    debugger
    this.store.dispatch(incrementProduct({productId}))
  }
  decrement(productId:number){
    debugger
    this.store.dispatch(decrementProduct({productId}))
  }
}
