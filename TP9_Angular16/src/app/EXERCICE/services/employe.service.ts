import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employe } from '../classes/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  public readonly URL = 'http://localhost:3101/employes';

  constructor(private http: HttpClient) {}

  public getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.URL);
  }

  public addNewEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.URL, employe);
  }
}
