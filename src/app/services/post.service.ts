import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  posts: Post[] = [];
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Post[]>(environment.postsApiUrl, options);
  }

  create(payload: Post) {
    return this.http
      .post<Post>(environment.postsApiUrl, payload)
      .pipe(tap((post) => (this.posts = [...this.posts, post])));
  }

  edit() {}

  delete() {}
}
