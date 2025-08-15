import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class Filter {
  @Input()
  all: number = 0;
  @Input()
  outOfStock: number = 0;
  @Input()
  inStock: number = 0;

  @Output()
  selectedFilterChange: EventEmitter<string> = new EventEmitter<string>();

  selectedFilter: string = 'all';

  onFilterChanged() {
    this.selectedFilterChange.emit(this.selectedFilter);
  }
}
