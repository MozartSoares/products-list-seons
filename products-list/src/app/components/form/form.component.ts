import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Product>();

  form!: FormGroup;

  constructor(private router: Router) {}

  submit() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.quantity === null) {
      this.form.value.quantity = 0;
    }
    console.log(this.form.value);
    console.log('passando os dados corretamente');

    this.onSubmit.emit(this.form.value);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    // inicializando formulário
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      quantity: new FormControl(null),
      category: new FormControl('', [Validators.required]),
    });
  }

  // GETTERS //

  get name() {
    return this.form.get('name')!;
  }

  get quantity() {
    return this.form.get('quantity');
  }

  get category() {
    return this.form.get('category')!;
  }
}
