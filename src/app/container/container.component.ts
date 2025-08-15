import { Component } from '@angular/core';
import { Search } from './search/search.component';
import { ProductList } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  imports: [Search, ProductList],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class Container {
  listOfString: string[] = ['Paul', 'Nick', 'John', 'Kate'];

  searchText: string = '';

  setSearchText(value: string) {
    this.searchText = value;
  }
}
