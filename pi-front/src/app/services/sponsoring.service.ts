import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DossierSponsoring } from '../models/sponsoring';

@Injectable({
  providedIn: 'root'
})
export class SponsoringService {

  constructor(private http: HttpClient) { }

  getAllDossierSponsoring(): Observable<DossierSponsoring[]> {
    return this.http.get<DossierSponsoring[]>('http://localhost:9090/DossierSponsoring/getAll');
  }


  getDossierSponsoringLength(): Observable<number> {
    return this.http.get<DossierSponsoring[]>('http://localhost:9090/DossierSponsoring/getAll').pipe(
      map(DossierSponsoring => DossierSponsoring.length)
    );
  }

  getPackslength(): Observable<number> {
    return this.getAllDossierSponsoring().pipe(
      map(dossiers => dossiers.map(dossier => dossier.packs.length).reduce((total, length) => total + length))
    );
  }
}
