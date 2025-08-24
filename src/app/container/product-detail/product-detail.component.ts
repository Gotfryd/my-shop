import { Component, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductList } from '../product-list/product-list.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgStyle],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetail {
  product: Product;

  @Input()
  productListComp: ProductList = undefined;

  ngOnInit() {
    this.product = this.productListComp.selectedProduct;
  }
}
