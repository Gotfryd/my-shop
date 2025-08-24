import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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

  @ViewChild('searchInput')
  searchInputEl: ElementRef;

  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChange.emit(this.searchText);

    //console.log(inputEl.value);
  }
}
