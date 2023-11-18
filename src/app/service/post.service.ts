import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  apiBaseUrl = 'http://localhost:3000';

  GetAllPosts() {
    return this.http.get(this.apiBaseUrl + '/post');
  }

  GetPostById(id: string) {
    return this.http.get(this.apiBaseUrl + '/post/' + id);
  }

  CreatePost(data: any) {
    return this.http.post(this.apiBaseUrl + '/post', data);
  }
}
