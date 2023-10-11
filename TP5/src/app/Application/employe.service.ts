import { Injectable } from '@angular/core';
import { Employe } from './employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  constructor() {}

  listEmployes: Employe[] = [
    new Employe(1234, 'Amine SALAH', 'Ingénieur'),
    new Employe(5847, 'Mouna MOALLA', 'Directeur'),
    new Employe(5812, 'Mourad SMIDA', 'Comptable'),
    new Employe(9641, 'Samar FENINA', 'Directeur'),
  ];

  getEmployes() {
    return this.listEmployes;
  }

  deleteFirstEmployee() {
    this.listEmployes.shift();
  }
}
