import { Component } from '@angular/core';

@Component({
  selector: 'app-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css'],
})
export class ListmaterielComponent {
  materiels = [
    {
      nom: 'Scanner',
      reference: 'e7f8',
      image: 'assets/scanner.jpg',
      prix: 253.45,
      etat: 'réparé',
    },
    {
      nom: 'Ecran',
      reference: 'ec18',
      image: 'assets/ecrans.png',
      prix: 403.5,
      etat: 'endommagé',
    },
    {
      nom: 'Imprimante',
      reference: 'imp88',
      image: 'assets/imprimantes.jpg',
      prix: 189.5,
      etat: 'endommagé',
    },
    {
      nom: 'Pc Portable',
      reference: 'hp58',
      image: 'assets/pcPortables.png',
      prix: 1512.8,
      etat: 'réparé',
    },
  ];

  defaultImage =
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80';

  onRepare(index: number) {
    this.materiels[index].etat = 'réparé';
  }
}
