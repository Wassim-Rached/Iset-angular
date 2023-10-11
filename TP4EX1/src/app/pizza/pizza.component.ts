import { Component, Input } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'was-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;
}
