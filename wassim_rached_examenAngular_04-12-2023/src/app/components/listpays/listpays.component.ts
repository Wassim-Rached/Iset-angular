import { Component, OnInit } from '@angular/core';
import { Pays } from 'src/app/entities/pays';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-listpays',
  templateUrl: './listpays.component.html',
  styleUrls: ['./listpays.component.css'],
})
export class ListpaysComponent implements OnInit {
  pays: Pays[] = [];

  constructor(private paysService: PaysService) {}

  ngOnInit(): void {
    this.paysService.getPays().subscribe((pays) => {
      this.pays = pays;
    });
  }
}
