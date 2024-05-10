import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() product!: Product;
  @Input() isVisible: boolean = false;

  @Output() removeProduct: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() reloadTable: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  remove: IconDefinition = faTrash;

  dnone = 'visible';

  handleOnSubmit() {
    this.reloadTable.emit();
  }

  constructor() {}

  onProductRemoved(removedProduct: Product): void {
    this.removeProduct.emit(removedProduct);
    this.close();
  }

  close(): void {
    this.closeModal.emit();
  }
  ngOnInit(): void {}
}
