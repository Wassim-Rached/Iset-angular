import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servics/auth.service';

@Component({
  selector: 'app-menuetud',
  templateUrl: './menuetud.component.html',
  styleUrls: ['./menuetud.component.css'],
})
export class MenuetudComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
