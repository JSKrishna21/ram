import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, LoginCredentials } from '../../core/services/auth.service';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backgroundImage = 'src/assets/images/cctv-security-camera.jpg';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      const credentials: LoginCredentials = {
        email: this.loginForm.value.email || '',
        password: this.loginForm.value.password || ''
      };
      
      this.authService.login(credentials).subscribe({
        next: (success) => {
          if (success) {
            this.router.navigate(['/home']);
          }
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
    }
  }
}
