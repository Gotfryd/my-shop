import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductList {
  product = {
    name: 'Samsung Galaxy S21',
    price: 499,
    color: 'Snow White',
    discountValue: 12.5,
    inStock: 0
  }

  getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discountValue/100)
  }
}
