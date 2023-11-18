import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  constructor(private service: CategoryService) {
    this.LoadCategories();
  }

  categories: any = [];
  displayedColumns = ['id', 'title', 'description', 'createdAt', 'updatedAt'];
  dataSource: any;

  LoadCategories() {
    this.service.GetAllCategories().subscribe((res: any) => {
      this.categories = res;
      this.dataSource = new MatTableDataSource(this.categories);
    });
  }
}
