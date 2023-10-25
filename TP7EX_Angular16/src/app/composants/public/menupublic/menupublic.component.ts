import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menupublic',
  templateUrl: './menupublic.component.html',
  styleUrls: ['./menupublic.component.css'],
})
export class MenupublicComponent {
  constructor(private router: Router) {}

  public GoToLogin() {
    this.router.navigate(['extranet']);
  }
}
