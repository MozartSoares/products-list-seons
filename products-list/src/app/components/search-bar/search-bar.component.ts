import { Component, OnInit } from '@angular/core';

import { IconDefinition, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  icon: IconDefinition = faSearch;
  term: string = '';

  filter(term: string) {
    console.log(term);
    //todo
    //criar filtragem por nome e categoria
  }

  //todo

  constructor() {}

  ngOnInit(): void {}
}
