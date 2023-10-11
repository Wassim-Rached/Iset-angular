import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../../services/voiture.service';
import { Voiture } from '../../model/voiture';

@Component({
  selector: 'app-listvoitures',
  templateUrl: './listvoitures.component.html',
  styleUrls: ['./listvoitures.component.css'],
})
export class ListvoituresComponent implements OnInit {
  voitures: Voiture[] = [];

  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {
    this.voitures = this.voitureService.getVoitures();
  }
}
