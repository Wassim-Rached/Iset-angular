import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Parc } from '../../classes/parc';

export type ParcLikeEvent = { id: number; nbLikes: number };

@Component({
  selector: 'app-parc',
  templateUrl: './parc.component.html',
  styleUrls: ['./parc.component.css'],
})
export class ParcComponent {
  public readonly defaultImgUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Sleeping_Beauty_Castle_2019.jpg/1200px-Sleeping_Beauty_Castle_2019.jpg';

  @Input() public parc!: Parc;

  @Output() onLikeEvent = new EventEmitter<ParcLikeEvent>();

  @Output() onSupprimerEvent = new EventEmitter<number>();

  public onLike() {
    this.onLikeEvent.emit({ id: this.parc.id, nbLikes: this.parc.nbLikes + 1 });
  }

  public onSupprimer() {
    this.onSupprimerEvent.emit(this.parc.id);
  }
}
