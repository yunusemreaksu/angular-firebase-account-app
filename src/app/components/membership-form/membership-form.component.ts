import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.css'],
})
export class MembershipFormComponent {
  currentRoute = this.router.url;

  @Input() user!: User;

  @Output() login = new EventEmitter<User>();
  @Output() signup = new EventEmitter<User>();

  constructor(private router: Router) {}

  handleLogin(form: NgForm) {}

  handleSignup(form: NgForm) {
    if (form.valid) {
      this.signup.emit(form.value);
      console.log(form.value);
    } else {
      form.form.markAllAsTouched();
    }
  }
}
