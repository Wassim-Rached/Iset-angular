import { Component, OnInit } from '@angular/core';
import { Employe } from '../Application/employe';
import { EmployeService } from '../Application/employe.service';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css'],
})
export class ListemployesComponent implements OnInit {
  lesemployes: Employe[] = [];

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.lesemployes = this.employeService.getEmployes();
  }
}
