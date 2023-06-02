import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pai } from '../models/pai.model';
import {Filho} from "../models/filho.model";

@Injectable({
  providedIn: 'root'
})
export class PaiService {
  private apiUrl = 'http://localhost:8080/pais';

  constructor(private http: HttpClient) { }

  getPais(): Observable<Pai[]> {
    return this.http.get<Pai[]>(this.apiUrl);
  }

  getPaiById(id: number): Observable<Pai> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Pai>(url);
  }

  atualizarPai(pai: Pai): Observable<Pai> {
    const url = `${this.apiUrl}/${pai.id}`;
    return this.http.put<Pai>(url, pai);
  }

  getFilhosByPaiId(paiId: number): Observable<Filho[]> {
    const url = `${this.apiUrl}/${paiId}/filhos`; // URL específica para buscar os filhos relacionados a um pai

    return this.http.get<Filho[]>(url);
  }
}
