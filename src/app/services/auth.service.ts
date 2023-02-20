import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  isLoggedIn: boolean = false;
  loggedInUserId!: number;
  loggedInUserEmail!: string;
  token!: string | null | void;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };
    return this.http.get<User[]>(environment.usersApiUrl, options);
  }

  login(user: User) {
    sessionStorage.setItem('userToken', String(Date.now()));
    this.token = sessionStorage.getItem('userToken');
    return this.getUsers().pipe(
      map((allUsers) => {
        const matchedUser = Object.values(allUsers).find(
          (u: User) => u.email === user.email && u.password === user.password
        );

        // console.log(matchedUser.find((u) => u.email === user.email));

        if (matchedUser) {
          this.loggedInUserId = matchedUser.userId;
          this.loggedInUserEmail = matchedUser.email;
          return matchedUser;
        } else {
          throw new Error('Incorrect email or password!');
        }
      })
    );

    // this.http.post<User>(environment.usersApiUrl, user);
  }

  signup(user: User) {
    return this.http.post<User>(environment.usersApiUrl, user).pipe(
      tap((newUser) => {
        this.users = [...this.users, newUser];
      })
    );
  }

  logout() {
    // sessionStorage.clear();
    // console.log('clear', sessionStorage.clear());
    return (this.isLoggedIn = false), (this.token = sessionStorage.clear());
  }
}
