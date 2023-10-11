import { Component, Input } from '@angular/core';
import { Tableau } from '../tableau';

@Component({
  selector: 'wass-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css'],
})
export class TableauComponent {
  @Input() tableau!: Tableau;
  @Input() index!: number;

  vendu: boolean = false;

  onNovelleOffre(amount: string) {
    this.tableau.price += parseInt(amount);
  }

  onVendu() {
    this.vendu = true;
    alert(
      `Le tableau ${this.tableau.name} a ete vendu au prix ${this.tableau.price} $`
    );
  }
}
