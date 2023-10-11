import { Component } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'was-list-pizzas',
  templateUrl: './list-pizzas.component.html',
  styleUrls: ['./list-pizzas.component.css'],
})
export class ListPizzasComponent {
  lespizzas: Pizza[] = [
    new Pizza('Neptune', 'assets/neptune.jpg', 8.7, true),
    new Pizza('4 Saisons', 'assets/saisons.jpg', 8.2, false),
    new Pizza('Fruits de Mer', 'assets/mer.jpg', 11.2, true),
    new Pizza('Marguerite', 'assets/marguerite.jpg', 7.5, true),
  ];
}
