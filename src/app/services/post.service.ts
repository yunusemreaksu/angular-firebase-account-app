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
  post!: Post;
  constructor(private http: HttpClient) {}

  getPost(postId: string | null): Observable<Post> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Post>(
      environment.apiUrl + 'posts/' + postId + '.json',
      options
    );
  }

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
      .put<Post>(
        environment.apiUrl + 'posts/' + payload.postId + '.json',
        payload
      )
      .pipe(tap((post) => (this.posts = [...this.posts, post])));
  }

  edit(payload: Post) {
    return this.http
      .patch<Post>(
        environment.apiUrl + 'posts/' + payload.postId + '.json',
        payload
      )
      .pipe(
        tap((post) => {
          this.posts = Object.values(this.posts);
          this.posts = this.posts.map((p: Post) => {
            if (p.postId === post.postId) {
              return post;
            } else {
              return p;
            }
          });
        })
      );
  }

  delete(payload: Post) {
    return this.http
      .delete<Post>(environment.apiUrl + 'posts/' + payload.postId + '.json')
      .pipe(
        tap(() => {
          this.posts = Object.values(this.posts);
          this.posts = this.posts.filter(
            (post: Post) => post.postId !== payload.postId
          );
        })
      );
  }
}
