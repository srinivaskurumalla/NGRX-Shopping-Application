import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: IProduct
  @Output() handleAdd = new EventEmitter();

  addToCart(product: IProduct) {
    this.handleAdd.emit(product)
  }
}
