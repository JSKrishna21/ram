import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface LoginCredentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin:boolean =false;

  login(credentials: LoginCredentials): Observable<boolean> {
    const loginSuccess = credentials.email === 'user@example.com' && credentials.password === 'password';
    this.isLogin = loginSuccess;
    return of(loginSuccess);
  }

  logout(): void {
    // Handle logout logic and reset isLogin
    this.isLogin = false;
  }

  isUserLoggedIn(): boolean {
    return this.isLogin;
  }
}
