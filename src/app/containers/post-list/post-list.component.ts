import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts!: Post[];
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = Object.values(posts);
    });
  }
}
