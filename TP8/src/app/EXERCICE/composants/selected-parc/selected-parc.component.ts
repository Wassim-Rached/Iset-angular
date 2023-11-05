import { Component, Input, OnInit } from '@angular/core';
import { Parc } from '../../classes/parc';
import { ParcService } from '../../services/parc.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-parc',
  templateUrl: './selected-parc.component.html',
  styleUrls: ['./selected-parc.component.css'],
})
export class SelectedParcComponent implements OnInit {
  @Input() parc!: Parc;

  constructor(
    private activatedRoute: ActivatedRoute,
    private parcService: ParcService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['parcId'];
    this.parcService.getParkById(id).subscribe((parc) => (this.parc = parc));
  }
}
