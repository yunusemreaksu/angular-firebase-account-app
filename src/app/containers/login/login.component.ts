import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user!: User;
  users: User[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  getUsers() {
    this.authService.getUsers().subscribe((users) => (this.users = users));
  }

  ngOnInit() {
    this.getUsers();
  }

  onLogin(user: User) {
    this.authService
      .login(user)
      .subscribe(() => this.router.navigate(['/']));
  }
}
