import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Continent } from 'src/app/entities/continent';
import { Pays } from 'src/app/entities/pays';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-modifpays',
  templateUrl: './modifpays.component.html',
  styleUrls: ['./modifpays.component.css'],
})
export class ModifpaysComponent implements OnInit {
  pays: Pays[] = [];
  selectedPay?: Pays;
  Form!: FormGroup;
  continents = Object.values(Continent);

  constructor(
    private paysService: PaysService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.Form = this.fb.nonNullable.group({
      capitale: [
        '',
        [Validators.required, Validators.pattern('^[A-Z][a-z ]+$')],
      ],
      continent: ['', Validators.required],
      population: [0, [Validators.required, Validators.min(1000)]],
    });

    this.paysService.getPays().subscribe({
      next: (pays) => {
        this.pays = pays;
      },
    });
  }

  onChangePay(id: string) {
    this.paysService.getPaysById(parseInt(id)).subscribe({
      next: (pay) => {
        this.selectedPay = pay;

        this.Form!.get('capitale')!.setValue(this.selectedPay!.capitale);
        this.Form!.get('continent')!.setValue(this.selectedPay!.continent);
        this.Form!.get('population')!.setValue(this.selectedPay!.population);
      },
    });
  }

  onSubmit() {
    const data = this.Form!.value;
    this.paysService.updatePays(this.selectedPay!.id, data).subscribe({
      next: (pay) => {
        this.router.navigate(['/countries']);
      },
    });
  }

  onReset() {
    this.selectedPay = undefined;
  }

  invalidCapitalPattern() {
    console.log(this.Form.get('capitale')?.errors);
    return (
      this.Form!.get('capitale')!.hasError('pattern') &&
      this.Form!.get('capitale')!.touched
    );
  }
}
