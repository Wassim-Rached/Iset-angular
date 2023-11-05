import { Component, OnInit } from '@angular/core';
import { ParcService } from '../../services/parc.service';
import { Parc } from '../../classes/parc';
import { ParcLikeEvent } from '../parc/parc.component';

@Component({
  selector: 'app-listparcs',
  templateUrl: './listparcs.component.html',
  styleUrls: ['./listparcs.component.css'],
})
export class ListparcsComponent implements OnInit {
  public parcs: Parc[] = [];

  constructor(private parcService: ParcService) {}

  ngOnInit(): void {
    this.parcService.getParks().subscribe((parcs) => (this.parcs = parcs));
  }

  public onLike({ id, nbLikes }: ParcLikeEvent): void {
    this.parcService
      .updatePark(id, { nbLikes: ++nbLikes })
      .subscribe((parc) => {
        let updatedParc = this.parcs.find((p) => p.id === id);
        updatedParc!.nbLikes = parc.nbLikes;
      });
  }

  public onSupprimer(id: number): void {
    this.parcService.deletePark(id).subscribe(() => {
      this.parcs = this.parcs.filter((p) => p.id !== id);
    });
  }
}
