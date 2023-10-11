import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styles: [],
})
export class PropertyBindingComponent {
  titre: string = 'Property Binding';
  nom: string = 'Wafa';
  actif: boolean = true;
  taille: number = 50;
}
