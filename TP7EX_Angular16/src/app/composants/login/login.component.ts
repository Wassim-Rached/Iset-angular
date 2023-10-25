import { Component } from '@angular/core';
import { AuthService } from '../../servics/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public login(username: string, password: string): void {
    const validCreds = this.authService.login(username, password);

    if (!validCreds) return alert('Login ou mot de passe erronés');

    if (this.authService.isEtudiant()) {
      this.router.navigate(['/etud']);
      return;
    }

    if (this.authService.isTeacher()) {
      this.router.navigate(['/prof']);
      return;
    }
  }
}
