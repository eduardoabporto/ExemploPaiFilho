import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filho } from '../models/filho.model';

@Injectable({
  providedIn: 'root'
})
export class FilhoService {
  private apiUrl = 'http://localhost:8080/pais';

  constructor(private http: HttpClient) { }

  getFilhosByPaiId(paiId: number): Observable<Filho[]> {
    const url = `${this.apiUrl}?paiId=${paiId}`;
    return this.http.get<Filho[]>(url);
  }

  getFilhoById(id: number): Observable<Filho> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Filho>(url);
  }

  atualizarFilho(filho: Filho): Observable<Filho> {
    const url = `${this.apiUrl}/${filho.pai.id}/filhos/${filho.id}`;
    console.log(url);
    return this.http.put<Filho>(url, filho);
  }

  criarFilho(filho: Filho): Observable<any> {
    const url = `${this.apiUrl}/${filho.pai.id}/filhos`;
    return this.http.post(url, filho);
  }
}
