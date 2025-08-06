import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class Filter {
  all: number = 0;
  outOfStock: number = 0;
  inStock: number = 0;
}
