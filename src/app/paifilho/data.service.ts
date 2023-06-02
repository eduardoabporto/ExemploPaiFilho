import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pai } from '../models/pai.model';
import { Filho } from '../models/filho.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8080'; // URL da sua API

  constructor(private http: HttpClient) { }

  getPais(): Observable<Pai[]> {
    const url = `${this.apiUrl}/pais`;
    return this.http.get<Pai[]>(url);
  }

  getFilhosByPaiId(paiId: number): Observable<Filho[]> {
    const url = `${this.apiUrl}/pais/${paiId}/filhos`;
    return this.http.get<Filho[]>(url);
  }
}
