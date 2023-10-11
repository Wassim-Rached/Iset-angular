import { Component } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent {
  employe = {
    nom: 'Mrad',
    prenom: 'mohaMed AlI',
    date: new Date(1998, 4, 12),
    salaire: 687.56,
  };
}
