import { Component } from '@angular/core';
import { PostService } from '../service/post.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  constructor(private service: PostService) {
    this.LoadPosts();
  }

  posts: any = [];
  displayedColumns = [
    'id',
    'title',
    'content',
    'slug',
    'mainImageUrl',
    'videoUrl',
    'category',
    'createdAt',
    'updatedAt',
  ];
  dataSource: any;

  LoadPosts() {
    this.service.GetAllPosts().subscribe((res: any) => {
      this.posts = res;
      this.dataSource = new MatTableDataSource(this.posts);
    });
  }
}
