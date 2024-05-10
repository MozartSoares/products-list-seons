import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { Product } from 'src/app/product';

import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.getProducts();
    console.log(this.products);
  }

  visualize: IconDefinition = faEye;
  remove: IconDefinition = faTrash;
  edit: IconDefinition = faPenSquare;

  ngOnInit(): void {}

  getProducts(): void {
    this.productsService
      .getAll()
      .subscribe((products) => (this.products = products));
  }
}
