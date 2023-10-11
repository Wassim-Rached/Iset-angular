import { Component } from '@angular/core';

type Telephone = {
  marque: string;
  modele: string;
  photo: string;
  prix: number;
};

@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css'],
})
export class TelephoneComponent {
  telephone: Telephone = {
    marque: 'Huawei',
    modele: 'Y5 Prime',
    photo: '',
    prix: 450,
  };

  haut_gamme(): boolean {
    return this.telephone.prix >= 700;
  }

  onDetails() {
    alert(
      `Telephone${this.telephone.modele} au prix ${this.telephone.prix} DT`
    );
  }
}
