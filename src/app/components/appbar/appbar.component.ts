import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css'],
})
export class AppbarComponent {
  constructor(private authService: AuthService) {}

  checkAuthenticated(): boolean {
    return this.authService.isLoggedIn;
  }

  hasToken() {
    if (typeof this.authService.token === 'string') {
      // console.log('if string', this.authService.token);
      // console.log(true);
      return true;
    } else {
      // console.log(false);
      return false;
    }
  }

  handleLogout() {
    this.authService.logout();
    // console.log('logout', this.authService.token);
    // sessionStorage.removeItem('userToken');
    // sessionStorage.clear();
    // console.log(this.hasToken());
  }
}
