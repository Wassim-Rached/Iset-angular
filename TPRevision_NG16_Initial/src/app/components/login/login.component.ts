import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Form!: FormGroup;
  message?: string;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Form = this.fb.nonNullable.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, pwd } = this.Form.value;

    this.loginService.login(username, pwd).subscribe({
      next: (users) => {
        console.log(users);
        const user = users[0];

        if (!user) {
          this.message = ' Login ou mot de passe incorrect ';
        } else {
          localStorage.setItem('role', user.role);
          if (user.role === 'Admin') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['directeur']);
          }
        }
      },
    });
  }
}
