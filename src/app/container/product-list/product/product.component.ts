import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [NgStyle],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class Product {
  @Input()
  product: {
    id: number;
    name: string;
    description: string;
    brand: string;
    gender: string;
    category: string;
    size: number[];
    color: string[];
    price: number;
    discountPrice?: number;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
  };
}
