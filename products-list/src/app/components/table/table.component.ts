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
  currentPage: number = 1;
  pageSize: number = 10;
  loaded: boolean = false;

  constructor(private productsService: ProductsService) {}

  visualize: IconDefinition = faEye;
  remove: IconDefinition = faTrash;
  edit: IconDefinition = faPenSquare;

  ngOnInit(): void {
    this.getProducts();
    this.checkLoad();
  }

  getProducts(): void {
    this.productsService
      .getAll()
      .subscribe(
        (products) =>
          (this.products = products.sort((a, b) =>
            a.name.localeCompare(b.name)
          ))
      )
      .add(() => {
        this.loaded = true;
      });
  }

  PaginateProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.products.slice(startIndex, endIndex);
  }
  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  hasNextPage(): boolean {
    return this.currentPage < this.getTotalPages().length;
  }

  hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  getTotalPages(): number[] {
    const totalPages = Math.ceil(this.products.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  checkLoad() {
    if (this.products.length > 0) {
      this.loaded = true;
    }
  }
}
