import { Component } from '@angular/core';

type Personne = {
  nom: string;
  image: string;
  nb: number;
  majeur: boolean;
};

@Component({
  selector: 'app-personnages-formates',
  templateUrl: './personnages-formates.component.html',
  styleUrls: ['./personnages-formates.component.css'],
})
export class PersonnagesFormatesComponent {
  tabPersonnages: Array<Personne> = [
    { nom: 'Donald', image: 'assets/donald.png', nb: 44, majeur: true },
    { nom: 'Popey', image: 'assets/popey.png', nb: 16, majeur: true },
    { nom: 'Sam', image: 'assets/happy.png', nb: 14, majeur: false },
  ];

  nombre_de_majeur(): number {
    return 0;
  }

  onSabonner(index: number) {
    this.tabPersonnages[index].nb++;
  }
}
