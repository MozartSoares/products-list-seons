import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event, Router } from '@angular/router';
import { Product } from 'src/app/product';

import { getCategoryName, getCategoryId } from 'src/app/utils';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/category';

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
    private categoriesService: CategoriesService
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
    console.log(this.form.value);
    this.form.value.categoryId = this.convertReverse(
      this.form.value.categoryId
    );
    console.log(this.form.value.categoryId);
    console.log(this.form.value);

    this.onSubmit.emit(this.form.value);
    this.router.navigate(['/']);
    if (this.isEditForm) {
      this.closeModal.emit();
    }
  }
  initializeForm() {
    if (this.isEditForm) {
      this.form = new FormGroup({
        name: new FormControl(this.product?.name),
        quantity: new FormControl(this.product?.quantity),
        categoryId: new FormControl(this.convert(this.product?.categoryId)),
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
}
