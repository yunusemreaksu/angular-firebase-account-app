import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  constructor(private http: HttpClient) {}

  login(user: User) {
    this.http.post<User>(environment.usersApiUrl, user);
  }

  signup(user: User) {
    this.http.post<User>(environment.usersApiUrl, user).pipe(
      tap((newUser) => {
        this.users = [...this.users, newUser];
      })
    );
  }
}
