import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Pays } from 'src/app/entities/pays';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-selectedpays',
  templateUrl: './selectedpays.component.html',
  styleUrls: ['./selectedpays.component.css'],
})
export class SelectedpaysComponent implements OnInit {
  pays$!: Observable<Pays[]>;
  continent!: string;

  constructor(
    private paysService: PaysService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.continent = this.activatedRoute.snapshot.params['continent'];
    this.pays$ = this.paysService.getPaysByContinent(this.continent);
  }
}
