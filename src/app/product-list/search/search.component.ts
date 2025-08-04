import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class Search {
  searchText: string = 'Jeans';

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }
}
