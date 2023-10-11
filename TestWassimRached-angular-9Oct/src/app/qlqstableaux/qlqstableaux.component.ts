import { Component } from '@angular/core';
import { Tableau } from '../tableau';

@Component({
  selector: 'wass-qlqstableaux',
  templateUrl: './qlqstableaux.component.html',
  styleUrls: ['./qlqstableaux.component.css'],
})
export class QlqstableauxComponent {
  tableaux: Tableau[] = [
    new Tableau(
      'La persistance de la mémoire',
      'assets/Tabs/t3.jpg',
      'Salvador Dali',
      1850,
      'surrealisme'
    ),
    new Tableau(
      'Guernica',
      'assets/Tabs/t1.jpg',
      'Pablo Picasso',
      3200,
      'surrealisme'
    ),
    new Tableau(
      'La corbeille de pommes',
      'assets/Tabs/t2.jpg',
      'Paul Cézanne',
      2400,
      'post impressionisme'
    ),
  ];
}
