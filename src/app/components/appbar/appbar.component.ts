import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  checkAuthenticated(): boolean {
    return this.authService.isLoggedIn;
  }

  handleLogout() {
    this.authService.logout();
    sessionStorage.removeItem('userToken');
  }
}
