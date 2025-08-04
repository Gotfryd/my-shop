import { Component } from '@angular/core';
import { Search } from './search/search.component';

@Component({
  selector: 'app-product-list',
  imports: [Search],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductList {
  //userName = 'Jack Sparrow';
  addToCart: number = 0;
  product = {
    name: 'Samsung Galaxy S21',
    price: 499,
    color: 'Snow White',
    discountValue: 12.5,
    inStock: 3,
    productImage: '/samasung.jpg',
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountValue) / 100
    );
  }

  onNameChange(event: any) {
    // this.userName = event.target.value;
  }

  decrementCartValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }

  incrementCartValue() {
    if (this.product.inStock > this.addToCart) {
      this.addToCart++;
    }
  }
}
