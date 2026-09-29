import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    console.log('Login called:', username);
    return this.http.post<any>(
      'https://localhost:7004/api/login/login',
      { username, password }
    );
  }

  register(username: string, password: string) {
    console.log('Register service called with:', username);

    const body = { username, password };
    console.log('Sending body:', body);

    return this.http.post(
      'https://localhost:7004/api/login/register',
      body,
      { responseType: 'text' }
    );
  }
}