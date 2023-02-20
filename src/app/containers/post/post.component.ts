import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  post!: Post;
  userId!: number;
  userEmail!: string;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userId = this.authService.loggedInUserId;
    this.userEmail = this.authService.loggedInUserEmail;
  }

  onCreate(post: Post) {
    this.postService
      .create({
        ...post,
        userEmail: this.userEmail,
        userId: this.userId,
        postId: Date.now(),
      })
      .subscribe(() => this.router.navigate(['/', 'posts']));
  }

  onEdit(post: Post) {}

  onDelete(post: Post) {}
}
