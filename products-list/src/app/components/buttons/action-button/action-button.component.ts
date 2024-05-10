import { Component, Input, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faPenSquare,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit {
  @Input() icon: IconDefinition = faTimes;
  @Input() color: string = '';

  constructor() {}

  onClick() {
    switch (this.icon) {
      case faEye:
        console.log('visualizando');
        break;
      case faTrash:
        console.log('removendo');
        break;
      case faPenSquare:
        console.log('editando');
    }
  }
  ngOnInit(): void {}
}
