import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class Search {
  searchText: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(inputEl: HTMLInputElement) {
    // this.searchText = event.target.value;
    console.log(inputEl.value);
  }

  onSearchTextChange() {
    this.searchTextChange.emit(this.searchText);
  }
}
