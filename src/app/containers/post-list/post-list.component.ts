import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts!: Post[];
  userId!: number;
  editMode = false;
  constructor(
    private postService: PostService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = Object.values(posts);
    });

    this.userId = this.authService.loggedInUserId;
  }

  navigateEditPage(postId: number) {
    // this.editMode = true;
    this.router.navigate(['/', 'posts', `${postId}`]);
  }

  handleDelete(post: Post) {
    this.postService.delete(post).subscribe(() => {
      window.location.reload();
    });
  }

  cancelEditMode() {
    this.editMode = false;
  }
}
