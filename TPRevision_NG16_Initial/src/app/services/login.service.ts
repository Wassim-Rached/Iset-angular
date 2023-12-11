import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = 'http://localhost:3000/logins';
  constructor(private http: HttpClient) {}

  login(username: string, pwd: string): Observable<User[]> {
    return this.http.get<User[]>(this.URL, {
      params: {
        username,
        pwd,
      },
    });
  }

  logout() {
    localStorage.clear();
  }
}
