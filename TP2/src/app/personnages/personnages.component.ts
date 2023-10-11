import { Component } from '@angular/core';

type Personne = {
  nom: string;
  image: string;
  nb: number;
  majeur: boolean;
};

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.css'],
})
export class PersonnagesComponent {
  tabPersonnages: Array<Personne> = [
    { nom: 'Donald', image: 'assets/donald.png', nb: 44, majeur: true },
    { nom: 'Popey', image: 'assets/popey.png', nb: 16, majeur: true },
    { nom: 'Sam', image: 'assets/happy.png', nb: 14, majeur: false },
  ];

  nombre_de_majeur(): number {
    let n = 0;
    this.tabPersonnages.forEach((tab) => {
      if (tab.majeur) {
        n++;
      }
    });
    return n;
  }

  onSabonner(index: number) {
    this.tabPersonnages[index].nb++;
  }
}
