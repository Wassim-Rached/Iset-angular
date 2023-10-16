import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/classes/livre';
import { LivreService } from '../../servics/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css'],
})
export class ListlivresComponent implements OnInit {
  public livres!: Livre[];
  public categories!: string[];

  constructor(private livreService: LivreService, private router: Router) {}

  ngOnInit(): void {
    this.livres = this.livreService.getAllLivres();
    this.categories = this.livreService.getAllCategories();
  }

  public goToLivre(livre_id: number): void {
    this.router.navigate(['livres', livre_id]);
  }

  public onCategorieChange(event: any): void {
    const categorie = event.target.value;
    if (categorie == 'all') {
      this.livres = this.livreService.getAllLivres();
    } else {
      this.livres = this.livreService.getLivresByCategory(categorie);
    }
  }
}
