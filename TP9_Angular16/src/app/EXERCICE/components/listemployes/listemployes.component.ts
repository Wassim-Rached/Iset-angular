import { Component, Input } from '@angular/core';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../classes/employe';

@Component({
  selector: 'app-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css'],
})
export class ListemployesComponent {
  @Input() employees: Employe[] = [];
}
