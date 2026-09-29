import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  form: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit(): void {
    console.log('onSubmit fired!');
    console.log('Form values:', this.form);

    const { username, password } = this.form;

    if (!username || !password) {
      alert('Please fill in both fields');
      return;
    }

    console.log('Calling authService.register...');

    this.authService.register(username, password).subscribe({
      next: (data) => {
        console.log('SUCCESS response:', data);
        alert('Registration successful!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ ERROR response:', err);
        alert('Registration failed: ' + JSON.stringify(err.error));
      },
      complete: () => {
        console.log('Request completed');
      }
    });
  }
}