import { Component, Input } from '@angular/core';
import { Personne } from '../personne';

@Component({
  selector: 'app-unepersonne',
  templateUrl: './unepersonne.component.html',
  styleUrls: ['./unepersonne.component.css'],
})
export class UnepersonneComponent {
  @Input() pers!: Personne;
}
