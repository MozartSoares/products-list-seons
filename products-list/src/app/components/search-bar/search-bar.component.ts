import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  icon: IconDefinition = faSearch;
  filterTerm: string = '';

  @Output() searchTextChanged = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.filterTerm);
  }

  constructor() {}

  ngOnInit(): void {}
}
