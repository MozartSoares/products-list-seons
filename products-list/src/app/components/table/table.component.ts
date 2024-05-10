import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { Product } from 'src/app/product';
import { getCategoryName } from 'src/app/utils';

import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() filterTerm: string = '';
  @Input() modalRemovedProduct!: Product;

  @Output() selectProduct: EventEmitter<Product> = new EventEmitter<Product>();

  products: Product[] = [];
  filteredProducts: Product[] = this.products;
  currentPage: number = 1;
  pageSize: number = 10;
  loaded: boolean = false;
  previousFilterTerm: string = '';

  //modal

  constructor(private productsService: ProductsService) {}

  visualize: IconDefinition = faEye;
  remove: IconDefinition = faTrash;
  edit: IconDefinition = faPenSquare;

  ngOnInit(): void {
    this.getProducts();
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
        this.filterProducts();
      });
  }

  //API METHODS
  removeProductFromList(removedProduct: Product): void {
    this.products = this.products.filter(
      (product) => product.id !== removedProduct.id
    );
  }

  //UTILS

  convert(id: number): string {
    return getCategoryName(id);
  }

  handleShowModal(product: Product): void {
    this.selectProduct.emit(product);
  }

  //FILTERS
  PaginateProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filterProducts();
    return this.filteredProducts.slice(startIndex, endIndex);
  }
  PageChange(pageNumber: number, action: string): void {
    if (action === 'back' && this.currentPage === 1) {
      return;
    }
    if (action === 'next' && this.currentPage === this.getTotalPages().length) {
      return;
    }
    this.currentPage = pageNumber;
  }

  getTotalPages(): number[] {
    this.filterProducts();
    const totalPages = Math.ceil(this.filteredProducts.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  filterProducts() {
    if (this.filterTerm !== this.previousFilterTerm) {
      this.currentPage = 1;
      this.previousFilterTerm = this.filterTerm;
    }
    this.filteredProducts = this.products.filter((product) =>
      this.matchSearchTerm(product, this.filterTerm)
    );
  }

  matchSearchTerm(product: Product, term: string): boolean {
    if (!term) {
      return true;
    }
    term = term.toLowerCase();
    return (
      product.name.toLowerCase().includes(term) ||
      this.convert(product.categoryId).toLowerCase().includes(term)
    );
  }
}
