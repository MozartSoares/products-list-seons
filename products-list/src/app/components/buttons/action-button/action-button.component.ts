import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faPenSquare,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit {
  @Input() icon: IconDefinition = faTimes;
  @Input() color: string = '';
  @Input() product!: Product;

  @Output() productRemoved = new EventEmitter<Product>();

  constructor(private productsService: ProductsService) {}

  onClick() {
    switch (this.icon) {
      case faEye:
        console.log(`visualizando o ${this.product.name}`);
        break;
      case faTrash:
        console.log(`removendo o ${this.product.name}`);
        this.removeProduct(this.product);
        break;
      case faPenSquare:
        console.log(`editando o ${this.product.name}`);
    }
  }

  removeProduct(product: Product) {
    this.productsService
      .removeProduct(product.id!)
      .subscribe(() => this.productRemoved.emit(product));
  }
  ngOnInit(): void {}
}
