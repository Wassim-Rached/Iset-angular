import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css'],
})
export class PersonneComponent {
  @Input() nom!: string;
  @Input() age!: number;
  @Input('etud') statut!: boolean;
}
