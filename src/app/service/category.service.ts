import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = 'http://localhost:3000';

  GetAllCategories() {
    return this.http.get(this.apiBaseUrl + '/category');
  }

  GetCategoryById(id: string) {
    return this.http.get(this.apiBaseUrl + '/category/' + id);
  }

  CreateCategory(data: any) {
    return this.http.post(this.apiBaseUrl + '/category', data);
  }
}
