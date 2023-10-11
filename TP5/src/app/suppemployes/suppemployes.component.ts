import { Component } from '@angular/core';
import { EmployeService } from '../Application/employe.service';
import { Employe } from '../Application/employe';

@Component({
  selector: 'app-suppemployes',
  templateUrl: './suppemployes.component.html',
  styleUrls: ['./suppemployes.component.css'],
})
export class SuppemployesComponent {
  lesemployes: Employe[] = [];

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.lesemployes = this.employeService.getEmployes();
  }

  onSupprimer() {
    this.employeService.deleteFirstEmployee();
  }
}
