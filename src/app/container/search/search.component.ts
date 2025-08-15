import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [FormsModule, NgClass],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class Search {
  searchText: string = '';

  @Output()
  searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText(event: any) {
    this.searchText = event.target.value;
  }

  onSearchTextChange() {
    this.searchTextChange.emit(this.searchText);
  }
}
