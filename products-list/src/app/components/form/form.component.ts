import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { Product } from 'src/app/product';

import { getCategoryName, getCategoryId } from 'src/app/utils';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/category';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>();
  @Output() closeModal = new EventEmitter<Event>();
  @Input() product!: Product;
  @Input() isEditForm: boolean = false;
  @Input() isEditing: boolean = false;

  categories!: Category[];
  form!: FormGroup;

  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  //CONVERTERS
  convert(id: number): string {
    return getCategoryName(id);
  }

  convertReverse(name: string): number {
    return getCategoryId(name);
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.quantity === null && this.form.value.quantity < 0) {
      this.form.value.quantity = 0;
    }

    this.form.value.categoryId = this.convertReverse(
      this.form.value.categoryId
    );

    this.onSubmit.emit(this.form.value);
    //timeout para garantir o tempo da tabela atualizar antes do usuário retornar
    setTimeout(() => {
      this.router.navigate(['/']);
      if (this.isEditForm) {
        this.closeModal.emit(), 2000;
      }
    });
    if (this.isEditForm) {
      this.submitPutForm(this.product.id!, this.form.value);
      return;
    }
    this.submitPostForm(this.form.value);
  }
  initializeForm() {
    if (this.isEditForm) {
      this.form = new FormGroup({
        name: new FormControl(this.product?.name),
        quantity: new FormControl(this.product?.quantity),
        categoryId: new FormControl(
          this.convert(Number(this.product?.categoryId))
        ),
      });
      return;
    }
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl(null),
      categoryId: new FormControl('', [Validators.required]),
    });
  }

  ngOnChanges(): void {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService
      .getAll()
      .subscribe((categories) => (this.categories = categories));
  }

  // GETTERS //

  get name() {
    return this.form.get('name')!;
  }

  get quantity() {
    return this.form.get('quantity');
  }

  get categoryId() {
    return this.form.get('categoryId')!;
  }

  async submitPostForm(product: Product) {
    const productData = {
      name: product.name,
      quantity: +product.quantity,
      categoryId: +product.categoryId,
    };

    //formData padrão Angular não permite o envio de number apenas string
    //optei por esse outro método

    this.productsService.postProduct(productData).subscribe(
      () => {
        console.log('Produto enviado com sucesso.');
      },
      (error) => {
        alert(`Erro ao enviar o produto: ${error.message}`);
      }
    );
  }

  async submitPutForm(id: number, product: Product) {
    const productData = {
      id: product.id,
      name: product.name,
      quantity: +product.quantity,
      categoryId: +product.categoryId,
    };
    this.productsService.putProduct(id, productData).subscribe(
      () => {
        console.log('Produto enviado com sucesso.');
      },
      (error) => {
        alert(`Erro ao enviar o produto: ${error.message}`);
      }
    );
  }
}
