import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent {
  tab = [15, 46, 0, 89, 80];

  onPosition(indice: number) {
    console.log(`${this.tab[indice]} a pour position ${indice}`);
  }
}
