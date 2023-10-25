import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private etudiant = { username: 'etud', pwd: 'pwdEtud' };
  private enseignant = { username: 'prof', pwd: 'pwdProf' };

  constructor() {}

  public login(username: string, pwd: string): boolean {
    if (username === this.etudiant.username && pwd === this.etudiant.pwd) {
      localStorage.setItem('role', 'etudiant');
      return true;
    }
    if (username === this.enseignant.username && pwd === this.enseignant.pwd) {
      localStorage.setItem('role', 'enseignant');
      return true;
    }
    return false;
  }

  public isEtudiant(): boolean {
    return localStorage.getItem('role') == 'etudiant';
  }

  public isTeacher(): boolean {
    return localStorage.getItem('role') == 'enseignant';
  }

  public logout(): void {
    localStorage.removeItem('role');
  }
}
