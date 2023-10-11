import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Voiture } from '../../model/voiture';

@Component({
  selector: 'app-infosvoitures',
  templateUrl: './infosvoitures.component.html',
  styleUrls: ['./infosvoitures.component.css'],
})
export class InfosvoituresComponent implements OnInit {
  voitures: Voiture[] = [];
  result: any;

  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {
    this.voitures = this.voitureService.getVoitures();
  }

  onListeDesMarque(marque: string) {
    this.result = this.voitureService.getVoituresByMarque(marque);
  }

  onNombreDeClios() {
    this.result =
      'le nombre de clios est ' + this.voitureService.getNbVoitures('Clio');
  }

  onChercher(num_mar: string) {
    this.result = this.voitureService.getVoitureByNumSerie(num_mar);
  }
}
