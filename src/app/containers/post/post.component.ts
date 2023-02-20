import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  postId!: string | null;
  isEdit!: boolean;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('postId')) {
      this.postId = this.route.snapshot.paramMap.get('postId');
      this.postService
        .getPost(this.route.snapshot.paramMap.get('postId'))
        .subscribe((post) => {
          this.post = post;
        });
    }

    this.userId = this.authService.loggedInUserId;
    this.userEmail = this.authService.loggedInUserEmail;

    this.isEdit = this.route.snapshot.data['isEdit'];
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

  onEdit(post: Post) {
    this.postService
      .edit({
        ...post,
        userEmail: this.userEmail,
        userId: this.userId,
        postId: Number(this.postId),
      })
      .subscribe(() => this.location.back());
  }
}
