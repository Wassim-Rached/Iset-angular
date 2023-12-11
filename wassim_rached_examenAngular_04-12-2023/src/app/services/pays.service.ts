import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pays } from '../entities/pays';

@Injectable({
  providedIn: 'root',
})
export class PaysService {
  URL: string = 'http://localhost:3000/pays/';

  constructor(private http: HttpClient) {}

  public getPays(): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.URL);
  }

  public getPaysByContinent(continent: string): Observable<Pays[]> {
    return this.http.get<Pays[]>(this.URL + '?continent=' + continent);
  }

  public getPaysById(id: number): Observable<Pays> {
    return this.http.get<Pays>(this.URL + id);
  }

  public updatePays(id: number, continent: Pays): Observable<Pays> {
    return this.http.patch<Pays>(this.URL + id, continent);
  }
}
