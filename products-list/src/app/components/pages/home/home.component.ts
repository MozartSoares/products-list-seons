import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/product';

import { TableComponent } from '../../table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild(TableComponent) tableComponent!: TableComponent;

  filteredTerm: string = '';
  selectedProduct!: Product;
  isModalVisible: boolean = false;

  productToBeRemoved!: Product;

  //CHILD METHODS
  callTableMethodRemove(product: Product): void {
    this.tableComponent.removeProductFromList(product);
  }
  async callTableMethodUpdate(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.tableComponent.ngOnInit();
  }
  showModal(product: Product): void {
    this.selectedProduct = product;
    this.isModalVisible = true;
  }

  closeModal(): void {
    this.isModalVisible = false;
  }

  modalRemoveProduct(removedProduct: Product): void {
    this.productToBeRemoved = removedProduct;
    this.callTableMethodRemove(this.productToBeRemoved);
  }

  ngOnInit(): void {}

  filterProducts(term: string) {
    this.filteredTerm = term;
  }
}
