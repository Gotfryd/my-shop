import { Component, ViewChild } from '@angular/core';
import { Search } from './search/search.component';
import { ProductList } from './product-list/product-list.component';
import { ProductDetail } from './product-detail/product-detail.component';

@Component({
  selector: 'app-container',
  imports: [Search, ProductList, ProductDetail],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class Container {
  listOfString: string[] = ['Paul', 'Nick', 'John', 'Kate'];

  searchText: string = '';

  @ViewChild(ProductList) productListComponent: ProductList;

  setSearchText(value: string) {
    this.searchText = value;
  }
}
