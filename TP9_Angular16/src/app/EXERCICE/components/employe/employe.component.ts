import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Departement, Fonction } from '../../enum/types';
import { Affiliation } from '../../classes/affiliation';
import { EmployeService } from '../../services/employe.service';
import { Employe } from '../../classes/employe';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css'],
})
export class EmployeComponent implements OnInit {
  choices = Object.values(Fonction);
  employes: Employe[] = [];
  form: FormGroup = new FormGroup({
    id: new FormControl(Math.floor(Math.random() * 1000), {
      nonNullable: true,
    }),
    matricule: new FormControl(0, { nonNullable: true }),
    nom: new FormControl('', { nonNullable: true }),
    affiliation: new FormGroup({
      departement: new FormControl(Departement.Finance, {
        nonNullable: true,
      }),
      fonction: new FormControl(Fonction.Ing, { nonNullable: true }),
    }),
  });

  constructor(private employeService: EmployeService) {}

  ngOnInit(): void {
    this.employeService.getEmployes().subscribe({
      next: (employes) => {
        this.employes = employes;
      },
    });
  }

  onSubmit() {
    const newEmploye = this.form.value as Employe;
    this.employeService.addNewEmploye(newEmploye).subscribe({
      next: (employe) => {
        this.employes.push(employe);
      },
    });
  }

  onVider() {
    this.form.reset();
  }
}
