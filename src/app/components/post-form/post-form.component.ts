import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  @Input() userId!: number;
  @Input() post!: Post;

  @Output() create = new EventEmitter<Post>();
  @Output() edit = new EventEmitter<Post>();
  @Output() delete = new EventEmitter<Post>();

  handleCreate(form: NgForm) {
    if (form.valid) {
      this.create.emit({
        ...form.value,
      });
    } else {
      form.form.markAllAsTouched;
    }
  }

  handleEdit(form: NgForm) {}

  handleDelete() {}
}
