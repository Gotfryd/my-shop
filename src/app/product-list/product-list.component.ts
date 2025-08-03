import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductList {
  userName = 'Jack Sparrow';
  product = {
    name: 'Samsung Galaxy S21',
    price: 499,
    color: 'Snow White',
    discountValue: 12.5,
    inStock: 3,
    productImage: '/samasung.jpg'
  }

  getDiscountedPrice(){
    return this.product.price-(this.product.price*this.product.discountValue/100)
  }
}
