import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Parc } from '../classes/parc';

const URL = 'http://localhost:3000/parcs';

@Injectable({
  providedIn: 'root',
})
export class ParcService {
  constructor(private http: HttpClient) {}

  getParks(): Observable<Parc[]> {
    return this.http.get<Parc[]>(URL);
  }

  getParkById(id: number): Observable<Parc> {
    return this.http.get<Parc>(`${URL}/${id}`);
  }

  deletePark(id: number): Observable<any> {
    return this.http.delete(`${URL}/${id}`);
  }

  updatePark(id: number, data: any): Observable<any> {
    return this.http.patch(`${URL}/${id}`, data);
  }
}
