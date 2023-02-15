import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user!: User;

  constructor(private authService: AuthService, private router: Router) {}

  onSignup(user: User) {
    this.authService
      .signup(user)
      .subscribe(() => this.router.navigate(['/', 'login']));
  }
}
