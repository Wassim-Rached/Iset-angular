import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Departement, Fonction } from '../../enum/types';
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
    matricule: new FormControl(0, { nonNullable: true }),
    nom: new FormControl('', { nonNullable: true }),
    affiliation: new FormGroup({
      departement: new FormControl(Departement.Finance, {
        nonNullable: true,
      }),
      fonction: new FormControl(Fonction.Ing, { nonNullable: true }),
    }),
    diplome: new FormArray([]),
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
    console.log(this.form.value);
    this.employeService.addNewEmploye(this.form.value).subscribe({
      next: (employe) => {
        this.employes.push(employe);
      },
    });
  }

  onVider() {
    this.form.reset();
    this.lesDiplomes.clear();
  }

  onAjouterDiplome() {
    this.lesDiplomes.push(
      new FormGroup({
        intitule: new FormControl('', { nonNullable: true }),
        annee: new FormControl(0, { nonNullable: true }),
      })
    );
  }

  onSupprimerDiplome(index: number) {
    this.lesDiplomes.removeAt(index);
  }

  public get lesDiplomes(): FormArray {
    return this.form.get('diplome') as FormArray;
  }
}
