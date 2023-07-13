import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logistique } from '../models/logistique';

@Injectable({
  providedIn: 'root'
})
export class LogistiqueService {

  constructor(private http: HttpClient) { }


  getAllLogistiques(): Observable<Logistique[]> {
    return this.http.get<Logistique[]>('http://localhost:9090/logistique/GetAll');
}
}
