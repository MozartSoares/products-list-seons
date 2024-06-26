import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://localhost:8000/web/v1/products';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?per-page=1000`);
  }

  removeProduct(id: number) {
    return this.http.delete<Product>(`${this.apiUrl}/${id}`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  postProduct(formData: Omit<Product, 'id'>): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}`, formData);
  }

  putProduct(id: number, formData: Omit<Product, 'id'>): Observable<FormData> {
    return this.http.put<FormData>(`${this.apiUrl}/${id}`, formData);
  }
}
