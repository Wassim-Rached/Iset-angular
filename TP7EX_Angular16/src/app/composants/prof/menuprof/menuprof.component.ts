import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servics/auth.service';

@Component({
  selector: 'app-menuprof',
  templateUrl: './menuprof.component.html',
  styleUrls: ['./menuprof.component.css'],
})
export class MenuprofComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
