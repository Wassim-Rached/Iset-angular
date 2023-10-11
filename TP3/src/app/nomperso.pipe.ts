import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nomperso',
})
export class NompersoPipe implements PipeTransform {
  transform(nom: string, ...args: unknown[]): string {
    return '* ' + nom + ' *';
  }
}
