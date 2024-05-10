import { Component, Input, OnInit } from '@angular/core';

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor() {}

  visualize: IconDefinition = faEye;
  remove: IconDefinition = faTrash;
  edit: IconDefinition = faPenSquare;

  ngOnInit(): void {}
}
