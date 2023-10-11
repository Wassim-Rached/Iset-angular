import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styles: [],
})
export class InterpolationComponent {
  titre: string = 'interpolation';
  nom: string = 'Wassim';
  age: number = 20;

  infos() {
    return this.nom + ' a pour age ' + this.age + ' ans';
  }
}
